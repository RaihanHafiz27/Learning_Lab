const timePast = new Date("2025-01-08T14:20:30Z");

const TimeConverter = (timestamp: number) => {
  // Simulating time for NOW
  const now = new Date("2025-01-09T14:22:00Z").getTime();

  console.log(`NOW : ${now}`);
  console.log(`PAST : ${timestamp}`);

  const diffInMs = now - timestamp;
  console.log(`Diff In ms : ${diffInMs}`);

  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  console.log(`Diff In Sec : ${diffInSeconds}`);
  console.log(`Diff In Min : ${diffInMinutes}`);
  console.log(`Diff In Hour : ${diffInHours}`);
  console.log(`Diff In Days : ${diffInDays}`);

  if (diffInSeconds < 60) return "Recently";

  if (diffInMinutes < 60) return `${diffInMinutes} Minutes Ago`;

  if (diffInHours < 24) return `${diffInHours} Hours Ago`;

  return `${diffInDays} Days Ago`;
};

TimeConverter(timePast.getTime());
