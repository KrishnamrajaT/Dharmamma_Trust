import React, { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Typography,
  GridCard,
  CardContent,
  Grid,
  Card,
} from "@mui/material";

import { ResponsiveDialog } from "../components/dailog";

export function Donation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pan:"",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission
      console.log(formData);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    if (!data.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Invalid email address';
    }
    if (!/^\d{10}$/.test(data.phone)) {
      errors.phone = 'Invalid phone number (10 digits)';
    }
    if (!data.address.trim()) {
      errors.address = 'Address is required';
    }
    if (!data.city.trim()) {
      errors.city = 'City is required';
    }
    if (!/^\d{6}$/.test(data.pincode)) {
      errors.pincode = 'Invalid pincode (6 digits)';
    }
    if (!data.pan.trim()) {
      errors.pan = 'PAN is required';
    }
    return errors;
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: { md: "space-around", xs: "center" },
        alignItems: "center",
        marginTop: 10,
        marginBottom: 5,
      }}
    >
      <ResponsiveDialog />
      <Grid md={4} sx={{ display: { xs: "none", md: "flex" } }}>
        <DonationCard />
      </Grid>
      <Grid xs={8} md={4}>
        <Paper style={{ padding: "20px" }} elevation={3}>
          <Typography variant="h5" align="center" gutterBottom>
            Your Information
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  fullWidth
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  fullWidth
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Phone"
                  variant="outlined"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  fullWidth
                  error={!!errors.phone}
                  helperText={errors.phone}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Pan"
                  variant="outlined"
                  name="pan"
                  value={formData.pan}
                  onChange={handleChange}
                  fullWidth
                  error={!!errors.pan}
                  helperText={errors.pan}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  variant="outlined"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  fullWidth
                  error={!!errors.address}
                  helperText={errors.address}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="City"
                  variant="outlined"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  fullWidth
                  error={!!errors.city}
                  helperText={errors.city}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Pincode"
                  variant="outlined"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  fullWidth
                  error={!!errors.pincode}
                  helperText={errors.pincode}
                />
              </Grid>
            </Grid>
            <Button
              sx={{ mt: 2 }}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}

function DonationCard() {
  return (
    <Paper sx={{ padding: 7 }}>
      <Typography variant="h6" gutterBottom>
        Thank you for choosing to donate for a cause.
      </Typography>
      <Typography variant="body1">
        Your donation will help further our vision.
      </Typography>
      <Typography variant="h6" gutterBottom style={{ marginTop: "16px" }}>
        Important information about your donation:
      </Typography>
      <Typography variant="body1">
        Donations to Trust are exempt from tax under section 80G
        of the Income Tax Act.
      </Typography>
      <Typography variant="body1">
        Tax exemption is valid only in India.
      </Typography>
      <Typography variant="body1" style={{ marginTop: "16px" }}>
        Donors who would like to claim 80G Exemption under Income Tax, please
        provide your PAN No. in the donation Form.
      </Typography>
    </Paper>
  );
}
