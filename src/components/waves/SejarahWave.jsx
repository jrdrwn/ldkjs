function Bottom() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
      <path
        fill="currentColor"
        d="M0 64l30 26.7c30 26.3 90 80.3 150 74.6C240 160 300 96 360 74.7c60-21.7 120 .3 180 48C600 171 660 245 720 240s120-91 180-133.3C960 64 1020 64 1080 80c60 16 120 48 180 42.7 60-5.7 120-47.7 150-69.4l30-21.3V0H0z"></path>
    </svg>
  )
}
function Top() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="currentColor"
        d="M0 160l30 26.7c30 26.3 90 80.3 150 80 60 .3 120-53.7 180-85.4 60-32.3 120-42.3 180-32 60 10.7 120 42.7 180 64C780 235 840 245 900 224s120-75 180-112 120-59 180-53.3c60 5.3 120 37.3 150 53.3l30 16v192H0z"></path>
    </svg>
  )
}

export default function SejarahWave({ flip = false }) {
  return flip ? <Bottom /> : <Top />
}
