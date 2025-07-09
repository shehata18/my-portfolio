import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, Puzzle, Shield, Database, Globe, Server, Layout } from 'lucide-react';

const About = () => {
  const skills = [
    {
      name: "Laravel",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
        <path fill="#FF2D20" d="M504.4,115.83a5.72,5.72,0,0,0-.28-.68,8.52,8.52,0,0,0-.53-1.25,6,6,0,0,0-.54-.71,9.36,9.36,0,0,0-.72-.94c-.23-.22-.52-.4-.77-.6a8.84,8.84,0,0,0-.9-.68L404.4,55.55a8,8,0,0,0-8,0L300.12,111h0a8.07,8.07,0,0,0-.88.69,7.68,7.68,0,0,0-.78.6,8.23,8.23,0,0,0-.72.93c-.17.24-.39.45-.54.71a9.7,9.7,0,0,0-.52,1.25c-.08.23-.21.44-.28.68a8.08,8.08,0,0,0-.28,2.08V223.18l-80.22,46.19V63.44a7.8,7.8,0,0,0-.28-2.09c-.06-.24-.2-.45-.28-.68a8.35,8.35,0,0,0-.52-1.24c-.14-.26-.37-.47-.54-.72a9.36,9.36,0,0,0-.72-.94,9.46,9.46,0,0,0-.78-.6,9.8,9.8,0,0,0-.88-.68h0L115.61,1.07a8,8,0,0,0-8,0L11.34,56.49h0a6.52,6.52,0,0,0-.88.69,7.81,7.81,0,0,0-.79.6,8.15,8.15,0,0,0-.71.93c-.18.25-.4.46-.55.72a7.88,7.88,0,0,0-.51,1.24,6.46,6.46,0,0,0-.29.67,8.18,8.18,0,0,0-.28,2.1v329.7a8,8,0,0,0,4,6.95l192.5,110.84a8.83,8.83,0,0,0,1.33.54c.21.08.41.2.63.26a7.92,7.92,0,0,0,4.1,0c.2-.05.37-.16.55-.22a8.6,8.6,0,0,0,1.4-.58L404.4,400.09a8,8,0,0,0,4-6.95V287.88l92.24-53.11a8,8,0,0,0,4-7V117.92A8.63,8.63,0,0,0,504.4,115.83ZM111.6,17.28h0l80.19,46.15-80.2,46.18L31.41,63.44Zm88.25,60V278.6l-46.53,26.79-33.69,19.4V123.5l46.53-26.79Zm0,412.78L23.37,388.5V77.32L57.06,96.7l46.52,26.8V338.68a6.94,6.94,0,0,0,.12.9,8,8,0,0,0,.16,1.18h0a5.92,5.92,0,0,0,.38.9,6.38,6.38,0,0,0,.42,1v0a8.54,8.54,0,0,0,.6.78,7.62,7.62,0,0,0,.66.84l0,0c.23.22.52.38.77.58a8.93,8.93,0,0,0,.86.66l0,0,0,0,92.19,52.18Zm8-106.17-80.06-45.32,84.09-48.41,92.26-53.11,80.13,46.13-58.8,33.56Zm184.52,4.57L215.88,490.11V397.8L346.6,323.2l45.77-26.15Zm0-119.13L358.68,250l-46.53-26.79V131.79l33.69,19.4L392.37,178Zm8-105.28-80.2-46.17,80.2-46.16,80.18,46.15Zm8,105.28V178L455,151.19l33.68-19.4v91.39h0Z"/>
      </svg>
    },
    {
      name: "PHP",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-6 h-6">
        <path fill="#6181B6" d="M64 33.039C30.26 33.039 2.906 46.901 2.906 64S30.26 94.961 64 94.961 125.094 81.099 125.094 64 97.74 33.039 64 33.039zM48.103 70.032c-1.458 1.364-3.077 1.927-4.86 2.507-1.783.581-4.052.461-6.811.461h-6.253l-1.733 10h-7.301l6.515-34h14.04c4.224 0 7.305 1.215 9.242 3.432 1.937 2.217 2.519 5.364 1.747 9.337-.319 1.637-.856 3.159-1.614 4.515a15.118 15.118 0 01-2.972 3.748zM69.414 73l6.514-34h7.297l-6.291 33.105-7.52.895zM111.472 70.032c-1.458 1.364-3.077 1.927-4.86 2.507-1.783.581-4.052.461-6.811.461h-6.253l-1.733 10h-7.301l6.515-34h14.04c4.224 0 7.305 1.215 9.242 3.432 1.937 2.217 2.519 5.364 1.747 9.337-.319 1.637-.856 3.159-1.614 4.515a15.118 15.118 0 01-2.972 3.748z"/>
        <path fill="#FFF" d="M46.083 50h8.129c2.966 0 5.089.215 6.368.646 1.279.43 2.1 1.198 2.464 2.303.364 1.107.305 2.397-.176 3.871-.481 1.474-1.262 2.72-2.343 3.736-1.08 1.016-2.372 1.688-3.874 2.016-1.502.328-3.909.492-7.223.492h-3.469l2.124-13.064zM109.452 50h8.129c2.966 0 5.089.215 6.368.646 1.279.43 2.1 1.198 2.464 2.303.364 1.107.305 2.397-.176 3.871-.481 1.474-1.262 2.72-2.343 3.736-1.08 1.016-2.372 1.688-3.874 2.016-1.502.328-3.909.492-7.223.492h-3.469l2.124-13.064z"/>
      </svg>
    },
    {
      name: "WordPress",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
        <path fill="#21759B" d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8.9 0 1.8.1 2.8.2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7.3 13.7.3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z"/>
      </svg>
    },
    {
      name: "HTML",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
        <path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512"/>
        <path fill="#EF652A" d="M256,472 L405,431 440,37 256,37"/>
        <path fill="#EBEBEB" d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"/>
        <path fill="#FFF" d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,223 387,208 371,208zM255,94 L255,129 255,150 255,150 392,150 392,150 392,150 393,138 396,109 397,94z"/>
      </svg>
    },
    {
      name: "CSS",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
        <path fill="#264DE4" d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z"/>
        <path fill="#2965F1" d="M405.388 431.408l35.148-393.73H256v435.146z"/>
        <path fill="#EBEBEB" d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"/>
        <path fill="#fff" d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"/>
      </svg>
    },
    {
      name: "JavaScript",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630" className="w-6 h-6">
        <rect width="630" height="630" fill="#f7df1e"/>
        <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/>
      </svg>
    },
    {
      name: "MySQL",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-6 h-6">
        <path fill="#00618A" d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927C17.811 4.565 5.257-2.16 1.633 6.682c-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z"/>
      </svg>
    },
    {
      name: "Git",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-6 h-6">
        <path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"/>
      </svg>
    },
    {
      name: "Docker",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-6 h-6">
        <path fill="#019BC6" d="M124.8 52.1c-4.3-2.5-10-2.8-14.8-1.4-.6-5.2-4-9.7-8-12.9l-1.6-1.3-1.4 1.6c-2.7 3.1-3.5 8.3-3.1 12.3.3 2.9 1.2 5.9 3 8.3-1.4.8-2.9 1.9-4.3 2.4-2.8 1-5.9 2-8.9 2h-6.7v-14.1h-13v-25h-15v12h-25v13h-13v14h-11.2l-.2 1.5c-.5 6.4.3 12.6 3 18.5l1.1 2.2.1.2c7.9 13.4 21.7 19 36.8 19 29.2 0 53.3-13.1 64.3-40.6 7.4.4 15-1.8 18.6-8.9l.9-1.8-1.6-1zm-96.8-13.1h10v11h-10v-11zm13.1 0h10v11h-10v-11zm13 0h10v11h-10v-11zm-39.1 14h10v11h-10v-11zm13.1 0h10v11h-10v-11zm13.1 0h10v11h-10v-11zm13.1 0h10v11h-10v-11zm13 0h10v11h-10v-11z"/>
      </svg>
    },
    {
      name: "Filament",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
        <path fill="#FF1C80" d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm0 36c-8.837 0-16-7.163-16-16S15.163 8 24 8s16 7.163 16 16-7.163 16-16 16z"/>
        <path fill="#FF1C80" d="M24 12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/>
      </svg>
    },
    {
      name: "CI/CD",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
        <path fill="#8BC34A" d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm0 36c-8.837 0-16-7.163-16-16S15.163 8 24 8s16 7.163 16 16-7.163 16-16 16z"/>
        <path fill="#8BC34A" d="M34 24c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10zm-18 0c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8z"/>
        <path fill="#8BC34A" d="M24 20v8l6-4z"/>
      </svg>
    },
    {
      name: "RESTful APIs",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
        <path fill="#1976D2" d="M42 12H6c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V16c0-2.2-1.8-4-4-4z"/>
        <path fill="#FFF" d="M14 21h4v6h-4zm8 0h4v6h-4zm8 0h4v6h-4z"/>
      </svg>
    }
  ];

  const workProcess = [
    {
      icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />,
      title: "Discovery & Planning",
      description: "Deep understanding of requirements and creating detailed project roadmap",
      gradient: "from-amber-50 to-orange-50"
    },
    {
      icon: <Puzzle className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500" />,
      title: "Smart Solutions",
      description: "Architecting efficient and scalable solutions using modern technologies",
      gradient: "from-emerald-50 to-teal-50"
    },
    {
      icon: <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />,
      title: "Clean Development",
      description: "Writing maintainable code following best practices and design patterns",
      gradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />,
      title: "Quality Assurance",
      description: "Rigorous testing and security measures for robust applications",
      gradient: "from-purple-50 to-fuchsia-50"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate web developer with expertise in Backend Development using php Laravel and WordPress, 
            dedicated to creating exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Computer Science Graduate & Web Developer
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              I'm a dedicated web developer with a Bachelor's degree in Computer Science from 
              Damietta University. With over 2 years of professional experience, I specialize 
              in creating robust web applications using Laravel and developing custom WordPress solutions.
            </p>

            <p className="text-gray-600 leading-relaxed">
              My expertise spans from backend API development to frontend user interfaces, 
              database design, and system architecture. I'm passionate about writing clean, 
              maintainable code and staying updated with the latest web technologies.
            </p>

            {/* Work Process Section */}
            <div className="pt-8">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                My Work Process
              </motion.h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {workProcess.map((process, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-gradient-to-br ${process.gradient} p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300`}
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="bg-white p-2 sm:p-3 rounded-xl shadow-sm flex-shrink-0">
                        {process.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">
                          {process.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {process.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center px-4 py-2 bg-gray-50 rounded-xl text-gray-700 text-sm font-medium hover:bg-gray-100 transition-all duration-200 group hover:scale-105"
                  >
                    <span className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform duration-200 flex items-center justify-center">
                      {skill.icon}
                    </span>
                    {skill.name}
                </motion.div>
              ))}
            </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 mt-8"
            >
              <h4 className="font-bold text-gray-900 mb-2">Education</h4>
              
              <p className="text-gray-600">
                <strong>Bachelorʼs degree in Computer Science, Very Good with Honors</strong><br />
                Faculty of Computers and AI, Damietta University (Egypt)<br />
                <span className="text-sm text-gray-500">2020 - 2024</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;