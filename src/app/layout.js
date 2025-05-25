import "./globals.css";

export const metadata = {
  title: "ProCircle | Professional Accountability & Growth Community",
  description:
    "Join ProCircle — a thriving community where professionals achieve goals through accountability partners, skill-building workshops, and meaningful networking. Start growing together today!",
  keywords: [
    "professional community",
    "accountability group",
    "career growth",
    "networking for professionals",
    "workshops and mentorship",
    "work-life balance",
    "career support group",
  ],
  openGraph: {
    title: "ProCircle | Collaborate, Grow, Succeed Together",
    description:
      "Discover a community designed to help professionals thrive through accountability, skill-building, and connection. Join ProCircle today!",
    images: [
      {
        url: "https://res.cloudinary.com/dzohnw8e5/image/upload/v1748176095/ProMeta_qut1uv.png", // Replace with your OpenGraph image path
        width: 1200,
        height: 630,
        alt: "ProCircle Community Members Collaborating",
      },
    ],
    siteName: "ProCircle",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProCircle | Your Professional Growth Partner",
    description:
      "Achieve your career goals with structured accountability, expert workshops, and a supportive network. Join ProCircle now!",
    // images: ["/twitter-image.jpg"], // Replace with your Twitter image path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
