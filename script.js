// Internship data array
const internships = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechCorp Solutions",
    domain: "Web Development",
    location: "Bangalore, India",
    duration: "3 months",
  },
  {
    id: 2,
    title: "Machine Learning Intern",
    company: "AI Innovations",
    domain: "Artificial Intelligence",
    location: "Hyderabad, India",
    duration: "6 months",
  },
  {
    id: 3,
    title: "UI/UX Design Intern",
    company: "Creative Studio",
    domain: "Design",
    location: "Mumbai, India",
    duration: "3 months",
  },
  {
    id: 4,
    title: "Full Stack Developer Intern",
    company: "WebDev Pro",
    domain: "Web Development",
    location: "Pune, India",
    duration: "4 months",
  },
  {
    id: 5,
    title: "Data Science Intern",
    company: "DataMinds Labs",
    domain: "Artificial Intelligence",
    location: "Delhi, India",
    duration: "5 months",
  },
  {
    id: 6,
    title: "Graphic Design Intern",
    company: "PixelPerfect",
    domain: "Design",
    location: "Chennai, India",
    duration: "2 months",
  },
  {
    id: 7,
    title: "Backend Developer Intern",
    company: "CloudTech Systems",
    domain: "Web Development",
    location: "Noida, India",
    duration: "3 months",
  },
  {
    id: 8,
    title: "Deep Learning Intern",
    company: "Neural Networks Inc",
    domain: "Artificial Intelligence",
    location: "Bangalore, India",
    duration: "6 months",
  },
  {
    id: 9,
    title: "Product Design Intern",
    company: "DesignHub",
    domain: "Design",
    location: "Gurgaon, India",
    duration: "4 months",
  },
  {
    id: 10,
    title: "React Developer Intern",
    company: "ModernWeb Co",
    domain: "Web Development",
    location: "Remote",
    duration: "3 months",
  },
  {
    id: 11,
    title: "Computer Vision Intern",
    company: "VisionAI",
    domain: "Artificial Intelligence",
    location: "Hyderabad, India",
    duration: "5 months",
  },
  {
    id: 12,
    title: "Motion Graphics Intern",
    company: "AnimateStudio",
    domain: "Design",
    location: "Mumbai, India",
    duration: "3 months",
  },
  {
    id: 13,
    title: "Node.js Developer Intern",
    company: "ServerSide Tech",
    domain: "Web Development",
    location: "Bangalore, India",
    duration: "4 months",
  },
  {
    id: 14,
    title: "DevOps Engineer Intern",
    company: "CloudOps Solutions",
    domain: "Web Development",
    location: "Chennai, India",
    duration: "6 months",
  },
  {
    id: 15,
    title: "Django Developer Intern",
    company: "PythonWeb Studios",
    domain: "Web Development",
    location: "Kolkata, India",
    duration: "3 months",
  },
  {
    id: 16,
    title: "iOS Developer Intern",
    company: "AppCraft Technologies",
    domain: "Mobile Development",
    location: "Mumbai, India",
    duration: "4 months",
  },
  {
    id: 17,
    title: "Android Developer Intern",
    company: "MobileSoft Inc",
    domain: "Mobile Development",
    location: "Bangalore, India",
    duration: "5 months",
  },
  {
    id: 18,
    title: "React Native Developer Intern",
    company: "CrossPlatform Apps",
    domain: "Mobile Development",
    location: "Pune, India",
    duration: "3 months",
  },
  {
    id: 19,
    title: "Flutter Developer Intern",
    company: "FlutterHub",
    domain: "Mobile Development",
    location: "Hyderabad, India",
    duration: "4 months",
  },
  {
    id: 20,
    title: "Mobile UI/UX Designer Intern",
    company: "AppDesign Studio",
    domain: "Mobile Development",
    location: "Delhi, India",
    duration: "3 months",
  },
]

// Get DOM elements
const internshipContainer = document.getElementById("internship-container")
const filterButtons = document.querySelectorAll(".filter-btn")
const modal = document.getElementById("application-modal")
const internshipInfo = document.getElementById("modal-internship-info")
const form = document.getElementById("application-form")

// Function to create internship card
function createInternshipCard(internship) {
  const card = document.createElement("div")
  card.className = "internship-card"
  card.innerHTML = `
        <span class="domain-tag">${internship.domain}</span>
        <h3 class="internship-title">${internship.title}</h3>
        <p class="company-name">${internship.company}</p>
        <div class="internship-details">
            <div class="detail-item">
                <span class="detail-label">Location:</span>
                <span>${internship.location}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Duration:</span>
                <span>${internship.duration}</span>
            </div>
        </div>
        <button class="apply-btn" onclick="applyNow('${internship.title}', '${internship.company}')">
            Apply Now
        </button>
    `
  return card
}

// Function to display internships
function displayInternships(internshipsToDisplay) {
  internshipContainer.innerHTML = ""

  if (internshipsToDisplay.length === 0) {
    internshipContainer.innerHTML = '<div class="no-results">No internships found for this domain.</div>'
    return
  }

  internshipsToDisplay.forEach((internship) => {
    const card = createInternshipCard(internship)
    internshipContainer.appendChild(card)
  })
}

// Function to filter internships
function filterInternships(domain) {
  if (domain === "all") {
    displayInternships(internships)
  } else {
    const filtered = internships.filter((internship) => internship.domain === domain)
    displayInternships(filtered)
  }
}

// Function for Apply Now button - opens modal
function applyNow(title, company) {
  internshipInfo.textContent = `Applying for: ${title} at ${company}`

  modal.classList.add("active")
  document.body.style.overflow = "hidden" // Prevent scrolling
}

// Function to close modal
function closeModal() {
  modal.classList.remove("active")
  document.body.style.overflow = "auto" // Restore scrolling
  form.reset() // Clear form
}

// Handle form submission
document.getElementById("application-form").addEventListener("submit", function (e) {
  e.preventDefault()

  const formData = new FormData(this)

  const applicationData = {
    studentName: formData.get("studentName"),
    email: formData.get("email"),
    collegeName: formData.get("collegeName"),
    resume: formData.get("resume")?.name || "No file selected",
    domain: formData.get("domain"),
    mode: formData.get("mode"),
  }

  console.log("Application Data:", applicationData)

  alert(
    `You registered successfully!\n\n` +
      `Your application has been submitted.\n` +
      `Offer letter will be sent to your email soon.\n\n` +
      `Email: ${applicationData.email}`,
  )

  closeModal()
})

// Close modal when clicking outside
modal.addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal()
  }
})

// Add event listeners to filter buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"))

    // Add active class to clicked button
    button.classList.add("active")

    // Get filter value and filter internships
    const filterValue = button.getAttribute("data-filter")
    filterInternships(filterValue)
  })
})

// Display all internships on page load
displayInternships(internships)
