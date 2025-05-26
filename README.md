# Tharindu Theekshana's Portfolio

A modern, responsive portfolio website built with React and Vite, featuring a beautiful dark/light theme, animated star background, and interactive contact form.

![Portfolio Preview](src/imgs/Screenshot%202025-05-26%20183012.png)

## 🌟 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Dark/Light Theme**: Toggle between dark and light modes
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**:
  - Animated star background
  - Smooth scrolling
  - Interactive project cards
  - Contact form with EmailJS integration
- **Sections**:
  - Hero section with animated text
  - About section
  - Skills showcase
  - Project portfolio
  - Contact form
  - Social media links

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**:
  - Tailwind CSS
  - Custom animations
  - CSS utilities
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Tharindu-Theekshana/Tharindu-Portfolio.git
cd Tharindu-Portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:

4. Start the development server:

```bash
npm run dev
```

## 📝 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_SERVICE_ID=your_emailjs_service_id
VITE_TEMPLATE_ID=your_emailjs_template_id
VITE_PUBLIC_KEY=your_emailjs_public_key
```

To get these values:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an Email Service
3. Create an Email Template
4. Get your Public Key from Account > API Keys

## 🎨 Customization

### Theme Colors

The color scheme can be customized in `src/index.css`. Look for the CSS variables in the `:root` and `.dark` selectors.

### Projects

Edit the projects array in `src/components/Projects.jsx` to showcase your work.

### Skills

Modify the skills array in `src/components/Skills.jsx` to display your expertise.

## 📱 Contact Information

- **Email**: tariduthikshana4@gmail.com
- **Phone**: +94 76 76 96 411
- **Location**: Colombo, Sri Lanka
- **LinkedIn**: [Tharindu Theekshana](https://www.linkedin.com/in/tharindu-theekshana-a4a53b285/)
- **Twitter**: [@TharinduTh82687](https://x.com/TharinduTh82687)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)
- [Lucide Icons](https://lucide.dev/)
