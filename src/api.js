export function fetchAPI(date) {
    console.log("Fetching available times for:", date);
    return Promise.resolve({
      '17:00': true,
      '18:00': true,
      '19:00': false,
      '20:00': true,
      '21:00': true
    });
  }

  export function submitAPI(formData) {
    console.log("Submitting booking data:", formData);
    return Promise.resolve(true);
  }