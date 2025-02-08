"use strict";

// Select the video element and the button from the DOM
const videoEl = document.querySelector(".video");
const btn = document.querySelector(".btn");

// Function to select the media stream (screen sharing)
const selectMediaStream = async function () {
  try {
    // Attempt to get the display media (screen sharing)
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();

    // Set the media stream to the video element
    videoEl.srcObject = mediaStream;

    // Once the metadata is loaded, start playing the video
    videoEl.onloadedmetadata = () => {
      videoEl.play();
    };
  } catch (error) {
    alert(error.message);
  }
};

// Function to handle the click event for enabling Picture-in-Picture mode
const playVideo = async function () {
  btn.disabled = true;
  await videoEl.requestPictureInPicture();
  btn.disabled = false;
};

// Event listener to trigger the playVideo function when the button is clicked
btn.addEventListener("click", playVideo);

// On load
selectMediaStream();
