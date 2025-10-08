export const analyzeCall = async (file) => {
  const formData = new FormData();
  formData.append('audio', file);

  const res = await fetch(
    'https://pallav-techologies-backend.onrender.com/api/analyze-call',
    {
      method: 'POST',
      body: formData,
    }
  );

  if (!res.ok) throw new Error('Failed to analyze');
  return await res.json();
};
