// Form handler utility for static export
// This replaces API routes when using static export

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw4C_eZbKa3LKVnXqkjcv50-O-mV9i7UW85tTAgjV8UDw8Sx5HZLs3BZRW0SRtmiHHUWA/exec';

export async function submitStaticForm(formData: any) {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Form submission error:', error);
    throw error;
  }
}

// Helper function to determine if we're in static export mode
export function isStaticExport() {
  return typeof window !== 'undefined' && !window.location.origin.includes('localhost');
}

// Universal form submission function that works for both standalone and static builds
export async function submitForm(endpoint: string, formData: any) {
  if (isStaticExport()) {
    // For static export, use Google Apps Script directly
    return submitStaticForm(formData);
  } else {
    // For standalone build, use API routes
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }
}
