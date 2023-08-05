const cityTimeZones = {
    'local':330,
    'abudhabi': 240,
    'amsterdam': 120,
    'athens': 180,
    'auckland': 720,
    'bangkok': 420,
    'beijing': 480,
    'berlin': 120,
    'budapest': 120,
    'buenosaires': -180,
    'cairo': 120,
    'california': -420,
    'capetown': 120,
    'chennai': 330,
    'chicago': -300,
    'chongqing': 480,
    'dallas': -300,
    'dammam': 180,
    'delhi': 330,
    'denver': -360,
    'detroit': -240,
    'doha': 180,
    'dubai': 240,
    'dublin': 60,
    'frankfurt': 120,
    'geneva': 120,
    'hanoi': 420,
    'helsinki': 180,
    'hongkong': 480,
    'hoofddorp': 120,
    'houston': -300,
    'hyderabad': 330,
    'istanbul': 180,
    'jakarta': 420,
    'johannesburg': 120,
    'kolkata': 330,
    'kuwaitcity': 180,
    'lagos': 60,
    'lalitpur': 345,
    'lima': -300,
    'london': 60,
    'losangeles': -420,
    'madrid': 120,
    'manchester': 60,
    'manila': 480,
    'marseille': 120,
    'medellin': -300,
    'melbourne': 600,
    'mexicocity': -300,
    'miami': -240,
    'milan': 120,
    'minneapolis': -300,
    'montreal': -240,
    'moscow': 180,
    'mumbai': 330,
    'munich': 120,
    'nairobi': 180,
    'newyork': -240,
    'nyc': -240,
    'osaka': 540,
    'oslo': 120,
    'paris': 120,
    'phoenix': -420,
    'prague': 120,
    'qatar': 180,
    'riodejaneiro': -180,
    'rome': 120,
    'rotterdam': 120,
    'sanfrancisco': -420,
    'santiago': -240,
    'santodomingo': -240,
    'seattle': -420,
    'seoul': 540,
    'shanghai': 480,
    'singapore': 480,
    'sofia': 180,
    'stockholm': 120,
    'sydney': 600,
    'taipei': 480,
    'tehran': 270,
    'tokyo': 540,
    'toronto': -240,
    'valencia': 120,
    'vancouver': -420,
    'vienna': 120,
    'warsaw': 120,
    'washington': -240,
    'wellington': 720,
    'zurich': 120
  };
  
  
  // Function to get time in a specific time zone
  function getTimeInTimeZone(timeZone) {
    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    return new Date(utcTime + timeZone * 60000);
  }
  
  // Function to update the clock and date display
  function updateClock() {
    const citySelect = document.getElementById('city');
    const selectedCity = citySelect.value;
    const timeZone = cityTimeZones[selectedCity];
  
    const now = getTimeInTimeZone(timeZone);
  
    // Get the date information
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dayOfWeek = days[now.getDay()];
    const month = months[now.getMonth()];
    const dayOfMonth = now.getDate();
  
    // Get the time information
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hours is 0, set it to 12
  
    const dateDisplay = document.getElementById('date');
    const hoursDisplay = document.getElementById('hours');
    const minutesDisplay = document.getElementById('minutes');
    const secondsDisplay = document.getElementById('seconds');
    const ampmDisplay = document.getElementById('ampm');
  
    dateDisplay.textContent = `${dayOfWeek}, ${month} ${dayOfMonth}`;
    hoursDisplay.textContent = String(hours).padStart(2, '0');
    minutesDisplay.textContent = minutes;
    secondsDisplay.textContent = seconds;
    ampmDisplay.textContent = ampm;
  }
  
  // Update the clock and date display when the page loads
  updateClock();
  
  // Update the clock and date display every second
  setInterval(updateClock, 1000);
  