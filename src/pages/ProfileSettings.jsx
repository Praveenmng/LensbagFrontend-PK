import React, { useState } from "react";
import EditForm from "../Components/EditForm";
import Header from "../Components/Header";
import ToggleSwitch from "../Components/ToggleSwitch";
import { Form, Container, Row, Col } from "react-bootstrap";

import RentalPreferenceForm from "../Components/RentalPreference";
import Footer from "../Components/Footer"

function ProfileSettings() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [newPassword, setNewPassword] = useState("")
  const [confirm, setConfirm] = useState("")

  return (
    <div>
      <Header />
      <Container className="mt-2">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <h3>Profile</h3>
            <Form>
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
              <RentalPreferenceForm label="Default Pickup Address" value={username} setValue={setUsername} />
              <ToggleSwitch label="Enable Pickup Location"/>
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
                <Form.Control type="password" disabled readOnly />
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
              
              <ToggleSwitch label="Notifications on Rental Alerts"/>
              <ToggleSwitch label="Notification on Approval"/>
              <ToggleSwitch label="Notify on offers  nearby"/>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer/>



    </div>
  );
}

export default ProfileSettings;
