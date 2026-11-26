const { uploadVideo } = require('../utils/video_utils');
const timezones = require('../config/timezone_config.json').timezones;

async function scheduleUploads() {
  const videos = [
    { title: "Video 1", path: "./videos/video1.mp4", description: "First video" },
    { title: "Video 2", path: "./videos/video2.mp4", description: "Second video" },
    { title: "Video 3", path: "./videos/video3.mp4", description: "Third video" }
  ];

  for (const video of videos) {
    const timezone = timezones[Math.floor(Math.random() * timezones.length)];
    console.log(`Uploading ${video.title} at ${timezone.timezone}...`);
    await uploadVideo(video, timezone);
  }
  console.log("All videos uploaded successfully!");
}

scheduleUploads();
