Here’s your COMPLETE README for the Interviewer Platform, including proper Markdown sections and the images/screenshots you’ve provided (“add them accordingly” and “this too” referenced above). Each image is matched to the correct place in the *Screenshots* section with descriptive captions. This is ready for your GitHub repo or to share with recruiters—including everything: intro, features, login info, test instructions, and all visuals.

# Interviewer Platform – README

## Overview

**Interviewer Platform** is a robust, full-stack web application for hosting and managing live or mock technical/HR interviews. Built with nextjs, tailwind css, typescript clerk, convex, stream it provides secure, role-based login for both candidates and interviewers/admins, and is deployed on Vercel for quick global access.

- **Tech Stack:**  Next, clerk, stream , convex 
- **Deployment:** Vercel  
- **Live :** [interviewer-sigma-flax.vercel.app](https://interviewer-sigma-flax.vercel.app/)

## User Roles & Demo Logins

Test the app as both Candidate and Interviewer/Admin:

| Role              | Email                | Password       |
|-------------------|----------------------|---------------|
| Interviewer/Admin | admin@gmail.com      | interviewer@  |
| Candidate         | candidate@gmail.com  | candidate@    |

## Features

| Role               | Capabilities                                                                              |
|--------------------|------------------------------------------------------------------------------------------|
| Candidate          | - Sign up / log in  
                    - Take live/mock interviews  
                    - Answer interview questions  
                    - See feedback/results                                                         |
| Interviewer/Admin  | - Admin dashboard for managing questions  
                    - Oversee/manage candidate interviews  
                    - Access analytics/results  
                    - User management tools                                                                     |

## How to Test

1. **Go to the Live App:**  
   [https://interviewer-sigma-flax.vercel.app/](https://interviewer-sigma-flax.vercel.app/)

2. **Candidate Experience:**  
   - Log in using:  
     - Email: candidate@gmail.com  
     - Password: candidate@  
   - Try the candidate dashboard: attempt interviews, view results, submit answers.

3. **Interviewer/Admin Experience:**  
   - Log in using:  
     - Email: admin@gmail.com  
     - Password: interviewer@  
   - Access admin dashboard: manage questions, view/interact with candidate records, review analytics.

## Screenshots

### 1. Home / Landing Page
Landing page
<img width="1910" height="983" alt="image" src="https://github.com/user-attachments/assets/02a0189e-a029-40ab-9330-f4f514436fba" />

Admins home
<img width="1899" height="891" alt="image" src="https://github.com/user-attachments/assets/edea7192-49c5-4392-b20f-129b49239f59" />

Candidate home
<img width="1916" height="933" alt="image" src="https://github.com/user-attachments/assets/2ce3e894-01f1-4c27-98b5-a8710e53b70a" />



*The app’s landing page welcomes users and offers candidate or interviewer login options, making it easy for each user type to get started.*

### 2. Interview Session Dashboard – Interviewer View

<img width="1897" height="906" alt="image" src="https://github.com/user-attachments/assets/b04bcb11-a840-4727-adf5-1915c8e0010c" />


*Admins/interviewers can review the status of every interview session (completed/succeeded/failed), see candidate profiles, and take admin actions like commenting or passing/failing candidates.*

### 3. Your Interviews Dashboard Candidate

<img width="1905" height="935" alt="image" src="https://github.com/user-attachments/assets/53fc2e83-7493-4425-a707-d89999d27076" />




### 4. Recordings  (Admin)

<img width="1902" height="898" alt="image" src="https://github.com/user-attachments/assets/e659dd65-f198-4f3e-a869-f398ff8c2d7e" />


*Admins get rich analytics and access to interview recordings for quality review, trend analysis, and performance feedback.*

## Demo Video (Optional)

_Add a YouTube or Google Drive walk-through link here if you make a short video demo for further clarity._

## Security & Access Notes

- New user sign-ups default to the candidate role for safety.
- Interviewer/admin features are accessible only via the provided demo credentials.
- Real data and advanced features are always behind secure authentication.

## Contact

For questions or a personal walkthrough, email: indrayudhsaha@gmail.com



