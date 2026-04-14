// Sample job data (in a real application, this would come from a backend API)
        
        let jobs = [];
        // Function to render job listings
        function renderJobs() {
            const jobsGrid = document.querySelector('.jobs-grid');
            jobsGrid.innerHTML = '';
            
            jobs.forEach(job => {
                const jobCard = document.createElement('div');
                jobCard.className = 'job-card';
                
                jobCard.innerHTML = `
                    <div class="job-header">
                        <h3 class="job-title">${job.title}</h3>
                        <div class="job-company">
                            <div class="company-logo">${job.company.charAt(0)}</div>
                            <div>${job.company}</div>
                        </div>
                    </div>
                    <div class="job-details">
                        <div class="job-detail">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${job.location}</span>
                        </div>
                        <div class="job-detail">
                            <i class="fas fa-money-bill-wave"></i>
                            <span>${job.salary}</span>
                        </div>
                        <div class="job-detail">
                            <i class="fas fa-file-alt"></i>
                            <span>${job.description}</span>
                        </div>
                    </div>
                    <div class="job-footer">
                        <div class="job-type ${job.type}">${job.type.charAt(0).toUpperCase() + job.type.slice(1)}</div>
                        <span>${job.posted}</span>
                    </div>
                `;
                
                jobsGrid.appendChild(jobCard);
            });
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            renderJobs();
            
            // Add filter functionality
            const filterButtons = document.querySelectorAll('.filter-btn');
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    // In a real app, this would filter the job listings
                });
            });
            
            // Simulate search functionality
            const searchButton = document.querySelector('.search-box button');
            searchButton.addEventListener('click', () => {
                alert('Search functionality would connect to backend in a real application');
            });
        });
