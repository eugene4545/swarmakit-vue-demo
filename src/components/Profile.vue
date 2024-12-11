<script setup>
import { Avatar, ProgressBar, Carousel } from "@swarmakit/vue"; // I created custom index.js in the node_modules to expose the swarmakit/vue components for cleaner imports
import './Profile.css'

const carouselSlides = [
  { src: '/images/gaurav-kumar-GzvSF-6Yx8k-unsplash.jpg', alt: 'Slide 1' },
  { src: '/images/daniil-silantev-MWGaMlETWgQ-unsplash.jpg', alt: 'Slide 2' },
  { src: '/images/jeremy-bishop-EwKXn5CapA4-unsplash.jpg', alt: 'Slide 3' },
];
</script>

<template>
  <div class="profile-page">
    <!-- Main Section -->
    <div class="content-container">
      <!-- Carousel -->
      <section class="carousel-section">
        <Carousel :slides="carouselSlides" :interval="3000" class="carousel" />
      </section>

      <!-- Profile and Form Section -->
      <section class="form-section">
        <!-- Profile Header -->
        <header class="profile-header">
          <Avatar 
            :imageSrc="'/images/image.jpg'" 
            name="User Name" 
            ariaLabel="User Avatar" 
            class="profile-avatar" 
          />
          <Button type="primary">Change Profile Picture</Button>
        </header>

        <!-- Form -->
        <form>
          <label>
            Name
            <input type="text" placeholder="Enter your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="Enter your email" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter new password" />
          </label>
        </form>

        <!-- Progress Bar -->
        <ProgressBar :progress="50" class="profile-progress" />
        <p>Profile Completion: 50%</p>
        <button class="btn-save-changes">Save Changes</button>
      </section>
    </div>


    <!-- Footer -->
    <footer class="profile-footer">
      <p>&copy; 2024 Demo Page. All Rights Reserved.</p>
      <nav>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Us</a>
      </nav>
    </footer>
  </div>
</template>


