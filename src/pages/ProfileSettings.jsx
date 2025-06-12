import React, { useEffect, useState } from "react";
import axios from "axios";
import EditForm from "../Components/EditForm";
import Header from "../Components/Header";
import ToggleSwitch from "../Components/ToggleSwitch";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import RentalPreferenceForm from "../Components/RentalPreference";
import Footer from "../Components/Footer";
import { useUser } from "../context/UserContext";

function ProfileSettings() {
const {login}=useUser();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
    
 useEffect(() => {
  if (!login) {
    alert("You have to login first to view your profile.");
    window.location.href = "/home"; // Redirect to home if not logged in
  }
}, [login]); // Dependency array to check login status on mount

  // Fetch user data on mount
  useEffect(() => {
    axios
      .get("/api/userprofile", { withCredentials: true })
      .then((res) => {
        const data = res.data;
        setUsername(data.username || "");
        setEmail(data.email || "");
        setName(data.name || "");
        setPhone(data.phone_number || "");
        setCity(data.city || "");
        setAddress(data.address || "");
        setPincode(data.zip || "");
      })
      .catch((err) => {
        console.error("Failed to fetch user profile:", err);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      username,
      name,
      phone_number: phone,
      city,
      address,
      zip: pincode,
      password: newPassword === confirm ? newPassword : null,
    };

    // Remove empty or null fields
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        delete formData[key];
      }
    });

    axios
      .patch("/api/profile", formData, { withCredentials: true })
      .then((response) => {
        alert("Profile updated successfully!");
        console.log("Update response:", response.data);
      })
      .catch((error) => {
        alert("Error updating profile.");
        console.error("Update error:", error.response || error.message);
      });
  }

  return (
    <div>
      <Header />
      <Container className="mt-2">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <h3>Profile</h3>
            <Form onSubmit={handleSubmit}>
              <EditForm label="Username" value={username} setValue={setUsername} />
              <EditForm label="Email" value={email} setValue={setEmail} />
              <EditForm label="Name" value={name} setValue={setName} />
              <EditForm label="Phone Number" value={phone} setValue={setPhone} />
              <EditForm label="City" value={city} setValue={setCity} />
              <EditForm label="Address" value={address} setValue={setAddress} />
              <EditForm label="Pincode" value={pincode} setValue={setPincode} />
            </Form>
          </Col>
        </Row>
      </Container>

      <Container className="mt-2">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <h3>Rental Preferences</h3>
            <Form>
              <RentalPreferenceForm
                label="Default Pickup Address"
                value={address}
                setValue={setAddress}
              />
              <ToggleSwitch label="Enable Pickup Location" />
            </Form>
          </Col>
        </Row>
      </Container>

      <Container className="mt-2">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <h3>Security</h3>
            <Form>
              <Form.Group controlId="oldPassword">
                <Form.Label>Old Password</Form.Label>
                <Form.Control type="password" value="*********" disabled readOnly />
              </Form.Group>
              <EditForm label="New Password" value={newPassword} setValue={setNewPassword} />
              <EditForm label="Confirm New Password" value={confirm} setValue={setConfirm} />
            </Form>
          </Col>
        </Row>
      </Container>

      <Container className="mt-2">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <h3>Notifications</h3>
            <Form>
              <ToggleSwitch label="Notifications on Rental Alerts" />
              <ToggleSwitch label="Notification on Approval" />
              <ToggleSwitch label="Notify on offers nearby" />
              <div className="d-flex justify-content-end mt-3">
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Save Changes
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default ProfileSettings;
