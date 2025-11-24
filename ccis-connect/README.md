CCIS CONNECT: Implementation of Campus Digital Mapping, Room and Equipment Availability Management Application

_____________________ 
Presented to
Faculty of Department of Computer Science (DCS)
Mariano Marcos State University
College of Computing and Information Sciences
Batac City
_____________________ 


In Partial Fulfillment of the Requirements for the Subject
CMPSC 140: SYSTEMS ANALYSIS AND DESIGN



Submitted by:
Basilio, Francisco F.
Maramba, Loraine Mae A.
Pineda, Lin Anthony M.
Tagapuen, Reign Krizzia G.

First Semester A.Y. 2025 - 2026
ACKNOWLEDGEMENT
We would like to express our deepest gratitude to all those who contributed to the completion of this project. The successful realization of this research would not have been possible without the invaluable support, guidance, and encouragement of numerous individuals who played significant roles throughout our academic journey.
First and foremost, we extend our sincere appreciation to our project/research advisors, Mr. Noel S. Rafanan and Mr. Reynold P. Villacillo, for their invaluable guidance, patience, and continuous support throughout this research journey. Their expertise, constructive feedback, and unwavering commitment to excellence have been instrumental in shaping this work. Their mentorship not only enhanced the quality of our research but also enriched our understanding of the subject matter and research methodology. We are deeply grateful for their willingness to share their knowledge and for the countless hours they dedicated to reviewing our work and providing meaningful insights.
We would also like to express our profound gratitude to our Dean, Dr. Saturnina F. Nisperos, for her exceptional leadership and for providing us with the research project request that served as the foundation for this study. Her vision in identifying relevant research opportunities and her commitment to providing an environment that fosters learning and academic growth have been truly inspiring. Her encouragement, administrative support, and dedication to academic excellence have greatly contributed to the progress and completion of this project. We are particularly thankful for her trust in our capabilities and for creating an atmosphere that encourages innovative thinking and scholarly pursuits.
We extend our heartfelt appreciation to our committee members for their insightful comments, suggestions, and constructive criticism that significantly enhanced the quality of this research. Their diverse expertise and different perspectives provided us with a comprehensive understanding of various aspects of our study, ultimately leading to a more robust and well-rounded research output.
Special thanks go to our research participants who generously shared their time, experiences, and valuable insights in testing our project. Their cooperation, honest feedback, and willingness to engage with our system were crucial in shaping, refining, and validating our project outcomes. Without their active participation and constructive input, this research would not have achieved its current level of completeness and effectiveness.
We also acknowledge the support provided by our institution, the faculty members, and the technical staff who assisted us in various capacities throughout the duration of this project. Their expertise and resources were essential in overcoming technical challenges and ensuring the smooth progression of our research activities.
Finally, we would like to express our deepest gratitude to our families and friends for their unwavering support, understanding, and encouragement during the most challenging moments of this academic pursuit. Their patience during our long hours of work, their belief in our capabilities, and their emotional support have been constant sources of motivation and strength. Their sacrifices and understanding have made it possible for us to dedicate ourselves fully to this research endeavor.

TABLE OF CONTENTS

PRELIMINARIES

CHAPTER I: INTRODUCTION 

CHAPTER II: REVIEW OF RELATED LITERATURE AND SYSTEMS
LIST OF TABLES
LIST OF FIGURES

CHAPTER I
INTRODUCTION
Background of the Study
In today’s academic environment, efficiency and accessibility are essential for ensuring smooth operations within educational institutions. However, current processes within Mariano Marcos State University’s College of Computing and Information Sciences (MMSU-CCIS) still relies on manual systems, particularly in borrowing materials, monitoring utilities and classrooms and navigating campus facilities. These methods tend to be tedious and time consuming and prone to inefficiencies, and inconvenience to both students and faculty members.
The absence of a centralized and streamlined system creates recurring issues such as delays or inability in borrowing equipment and difficulty in locating available facilities. New or visiting students may experience navigational difficulties within the campus, have difficulties with navigating, accessing and engaging with facilities among many other navigational issues.
With the rapid advancement of technology and the increasing adoption of mobile-friendly and location-based solutions, there is a pressing need to transition from traditional manual processes to digital systems. CCIS CONNECT directly addresses this gap by providing an integrated platform for mapping, monitoring, and borrowing. By streamlining these processes, the project not only enhances operational efficiency but also supports the college’s movement towards the integration of digital transformation and smart campus systems.
This project does not only aim to make new students and visitors more assimilated to the college but also to help streamline usual processes for faculty and long-term students regarding the normally tedious processes of checking, locating and borrowing materials and equipment that would have otherwise take manual processes, which results to inefficient or suboptimal use of materials and resources.
Ultimately, this system will serve as a vital tool in improving resource management, strengthening institutional productivity, and creating a more user-friendly and technology-driven environment for the CCIS community. 
Project Context:
Not enough classrooms, scheduling conflicts, scarce supplies are challenges that directly affect students and professors. This project will create a single, centralized system to help people find their way around the College of Computing and Information Sciences and also manage campus resources. The system will include a digital map that the users can directly interact with, a way to monitor rooms, information about equipment that is currently available, all to help people use campus resources in a much more efficient way. By integrating it within this pilot organization, the team can see how the system improves room usage, solves scheduling problems, and better equipment borrowing.
Primary users from the College of Computing and Information Sciences will easily find free rooms and available equipment. They will appreciate the simple way to check this information. Secondary users, such as administrators, will oversee how things are used, change plans, and will do so within the app. The system provides real-time updates of room and equipment availability, as well as interactive routing for locating facilities, ensuring convenience, accuracy, and efficiency for all involved and affected parties.
If the feasibility study demonstrates that the system effectively improves navigation, scheduling efficiency, and progresses resource allocation, it has the potential to be integrated with other campus facilities within the university. Better facility management, improving academic workflows, and reducing time wasted on manual inquiries would be gradually implemented if such integration would be expanded. This approach ensures that innovations tested at the college level can update and handle larger-scale campus management solutions while still ensuring and remaining responsive to the current needs of students, faculty, and administrators.

Objectives of the Project:
The  main objective of this project is to design and develop a centralized, real-time Campus Mapping, Room Availability Monitoring System, and Utility Borrowing System for the College of Computing and Information Sciences (CCIS). The system is intended to optimize resource allocation, enhance navigation efficiency, and streamline facility and equipment management processes while providing an interactive and accessible digital platform for students, faculty, and administrative staff. It seeks to provide a comprehensive, user-friendly and mobile-based system that addresses the identified challenges in campus resource utilization, particularly the shortage of classrooms and limited equipment availability, while ensuring efficient allocation and utilization of campus facilities to better serve the growing student population within budget constraints.
This project specifically aims to:
Design and implement an interactive campus mapping feature that provides real-time navigation assistance for students, faculty, and guests to locate classrooms, offices, and other facilities.
Develop a classroom availability status monitoring feature that provides real-time updates on classroom usage and availability to minimize conflicts in scheduling and support efficient utilization.
Create a utility borrowing system to manage the request, approval, and tracking of equipment, ensuring fair and efficient distribution.
Ensure mobile accessibility and user-friendliness by developing a responsive application interface suited for the intended users.
Implement security and access controls to ensure the security that only authorized users can borrow equipment or access administrative functions.
To conduct pilot testing and feedback collection from students, faculty, and administrative staff to refine the project and validate its effectiveness in addressing the identified issues.

Scope and Limitation of the Project
Scope:
CCIS Connect is an application designed to provide a real-time campus navigation system, room availability monitoring system, and utility borrowing system for the College of Computing and Information Sciences (CCIS). It is intended to enhance the efficiency of campus navigation, and facility and equipment management processes for students, faculty, guests, and administrative staff.
It includes the following core features:
Campus Mapping: An interactive map to locate classrooms, offices, and other facilities of CCIS.
Classroom Monitoring: A feature for faculty to check the availability of classrooms with the use of QR codes that are placed in each of the classrooms.
Utility Management: A feature to manage requests, approvals, and tracking of equipment available in areas within the college like Learning Commons and the Dean’s Office.
User Interface: Provides a simple and intuitive view for its different users; students, faculty, and the administrative staff.
Limitations:
No Classroom Reservations: The application only has a feature to view available and occupied classrooms in real-time, but will not handle reservations for rooms.
Coverage of Resources: Only equipment and facilities that are officially logged into the system will be tracked. Unlisted borrowed resources may not be monitored.
User Compliance: It is assumed that students, faculty, and administrative staff will actively comply with the borrowing and returning procedures. Non-compliance may reduce its efficiency.
Maintenance and Updates: Regular system maintenance and data updates are required. Without consistent system maintenance and data updates, its performance and accuracy may decline.

Significance of the Study
This study is significant as it provides a system that addresses the challenges in campus navigation, classroom scheduling, and utility management in the College of Computing and Information Sciences.
The study will benefit the following stakeholders:
Students. Provides an efficient way to navigate their way through the college and locate classrooms, offices and other facilities without difficulty. Additionally, its utility borrowing system feature will also improve the management and efficiency of the borrowing process of students, ensuring a fair and transparent access.
Faculty. To help find available rooms and to reduce scheduling conflicts that may arise due with real-time availability updates and support activities by ensuring efficient access to equipment.
Guests of the College. Provides a convenient way to navigate their way through the college and to locate classrooms, offices and other facilities without difficulty.
Administrative Staff. To streamline operations by automating equipment management, reducing the manual workload and minimizing errors.

CHAPTER 2
Figure Numbers from herevvvvvv
2.1 Review of Related Literature
2.1.1 Interactive Campus Mapping and Navigation
Navigating a new campus or area has been a particularly documented issue particularly for newcomers due to confusing layouts of static or simple maps [2]. With modern solutions, they can make use of technology to provide seamless, intuitive wayfinding. The literature supports a shift from traditional methods to dynamic, digital platforms. The Smart Campus Map project by Neelakantappa et al. (2025) introduced a web based map with an atlas style to provide comprehensive information about campus landmarks and facilities [11]. The author’s methods of surveying and designing building layouts, helps provide a practical approach to gathering the needed data in creating our very own intuitive digital map.
For more complicated environments, certain studies show that Augmented Reality (AR) has proven effective. From a study by Lu et al. [15], who developed an ARCore-based campus navigation system and Nordin et al. (2021) who developed a system that uses AR to overlay 3D images and virtual information onto the real world, AR makes streamlining and familiarization of an environment much more interactive [12]. This approach is also supported by Choudhari et al. (2024), who has implemented holographic arrows systems and step counter to provide real time guidance using an app [6]. The use of a combination of technologies, including GPS for outdoor navigation and BLE (Bluetooth Low Energy) and Wi-Fi triangulation for indoors, is identified as a robust solution for ensuring a smooth, continuous navigation experience across a sprawling campus [6, 12]. 
A study by Xavier et al. (2017) also corroborates the use of AR markers for accurate visual mapping and localization [19]. For indoor navigation, an approach by P. Adithya and M. Saravanan (2021), who developed an app using AR techs involving QR Codes that aims to provide direction wherever a GPS is unavailable [1]. Furthermore, a mobile location-aware campus map application by Akinwunmi et al. (2016) highlights the importance of providing maximum simplicity, a quality user experience, and accurate data to address the shortcomings of outdated, stationary maps [2]. This work, which used Bowen University as a case study, confirms that mobile-based, location-aware systems are essential for making navigation easier for students and visitors.
2.1.2 Real-Time Information and Resource Management
Our aim for an integrated campus system must offer more than just navigation: it should provide dynamic, real-time information to enhance campus life. While the provided literature does not explicitly discuss a "utility borrowing system," it lays the foundation for such a feature. The Campus Interactive Information Kiosk by Oyeman et al. (2024) included features like "Faculty Schedules", "Digital Announcement" and the like or similar systems which helps in our direction of real time monitoring [13]. The technology used to manage and display this type of real-time event and schedule data can be adapted to monitor the availability of resources like classrooms or equipment. The use of IoT devices such as BLE beacons and RFID markers, as mentioned by Choudhari et al. (2024), is directly applicable to creating a resource management system that tracks the location and status of borrowable assets [6, 24]. Studies on Automated Classroom Monitoring Systems also demonstrate how sensors, such as Passive Infrared (PIR) motion sensors or RFID card readers, can be used to provide real-time updates on classroom usage and availability, effectively addressing scheduling conflicts and improving utilization [3, 15]. The research by Hrad and Dudiak (2022) further supports this by creating an IoT system that made use of ultrasonic sensors to detect room occupancy, which is a modern method for real-time monitoring [7]. The ability to integrate these real time data into a centralized web-based platform is a key component for meeting the needs of a modern campus system.
2.1.3 Utility Borrowing System
There are also various literature that tackles utility borrowing system, with a strong emphasis on RFID technology. A thesis by Lim et al. (2010) titled "Automated borrowing system for laboratory equipment using RFID technology" allows students to manage their own borrowing transactions [10]. This system streamlines and improves on processes like an alarm that is triggered if an item is removed without being checked out, which can be integrated with equipment monitoring functions. Furthermore another study by Ananthan et al. (2022) tells more about this approach by demonstrating a system using RFID tags and IoT based devices to track the presence or absence of items in a cupboard showcasing a perfect full accuracy in their tests [4]. An article by TagMatiks (2025) then outlines the key components like RFID tags, readers, and software, and further explains how this system can provide real time monitoring of materials and prevent stuff like loss or theft, and especially displacement of materials in campus [18, 22]. These studies provide a secure model for managing the processes of request, approval, and tracking of equipment to ensure efficient and sustained distribution and use.
Atkinson et al. [23] studied booking systems where they identified challenges such as double booking and lack of role-based access. Their recommendations directly support CCIS CONNECT in fulfilling its SMART Campus objective, furthermore aiding our direction for fast and seamless booking system and interface.
2.1.4 Mobile Accessibility and User-Friendliness
Projects like the "Campus Compass" app (Choudhari et al., 2024) and the Campus Kiosk (Oyeman et al., 2024) are great examples of a simple interface and self-service model in action [6, 13]. In fact, Oyeman et al. (2024) formally evaluated their system with the ISO/IEC 25010 standard, and the results confirmed it was easy to learn and use [13].
The research also points to the need for features that promote inclusivity, like voice-assisted navigation and wheelchair-accessible routes, so the system works for people with disabilities [6, 16]. This commitment to a quality user experience and a great user interface is key to getting past the frustrations of using old, static maps, a point Akinwunmi et al. (2016) also made [2].
2.1.5 Security and Access Controls
Studies by Oyeman et al. (2024) and Choudhari et al. (2024) highlight key security measures, including user-permission-based access controls and data encryption [13, 6]. Building on this, Kim and Lee (2019) proposed a Centralized Access Control (CAC) system that uses RFID technology and smart cards to ensure only authorized users have access [8]. These modern systems, as discussed by Smolikova and Kutaj (2020), not only improve security in specific areas but also help manage resources in environments like universities [17, 25]. This approach sets a strong precedent for securing sensitive functions such as managing equipment loans or room reservations.
2.1.6 Pilot Testing and Feedback Collection
A study by Kim and Lee (2019) used a formal evaluation to assess their system's usability, reliability, and functionality [8]. This systematic approach is a great model to follow. To get the most out of this, consider using the Agile methodology as a framework. As explained by Asana (2025), Agile emphasizes continuous delivery and adapting to change based on user feedback [5].
A successful project, as highlighted by Neelakantappa et al. (2025), requires a feedback-driven approach. This means collecting data from all key users—students, faculty, and administrative staff—to refine and validate the system [11]. The goal of a pilot study, as defined in a separate article, is to conduct a small-scale trial to test your research protocols, data collection tools, and recruitment strategies before a full-scale rollout [14]. This shows that feedback isn't just a final step; it's a continuous process woven throughout the entire development lifecycle.



Conceptual Framework:
This section shows the conceptual framework of the proposed CCIS Connect which would follow the IPO model (Input – Process – Output). It illustrates the integration of the system with various inputs, processes, and outputs to give light to the existing challenges in resource allocation within the campus. As shown in the diagram:

Inputs → what resources, data, and technologies the system will use.
Processes → how the system will handle these inputs (the mechanisms, algorithms, and methods).
Outputs → the expected results/benefits for the users.
1. Inputs
User Data: Login credentials, user roles (student, faculty, admin).
Facility Data: Room schedules, availability status, floorplans.
Equipment Data: Borrowable items (projectors, laptops, etc.), tags/QR codes, status.
Technological Resources: Database, mobile app, real-time update services.
2. Processes
Navigation Module: Interactive digital map with search and route guidance.
Scheduling Module: Real-time monitoring and updating of classroom/laboratory availability.
Equipment Borrowing Module: Requesting, reserving, and returning borrowable equipment.
Admin Dashboard: Management of room schedules, updating equipment inventory, approving reservations.
Synchronization Engine: Ensures that changes (room booked, equipment borrowed) reflect across all platforms instantly.
3. Outputs
“CCISCONNECT”
For Students & Faculty:
Faster navigation of CCIS facilities.
Real-time access to room and equipment availability.
Less time wasted on manual inquiries.
For Admin/Management:
Centralized monitoring of campus resources.
Reduced conflicts and double-bookings.
Better utilization of limited rooms and equipment.
For the Institution (CCIS):
More efficient facility/resource management.
Scalable system that can expand to other colleges/university-wide.




FISHBONE DIAGRAM

The fishbone analysis presented in this study serves as a systematic diagnostic tool to identify the root causes behind inefficient campus navigation and resource allocation within CCIS, organizing potential causes into six categories: Machine, Method, Man, Money, Management, and Measurement. Machine-related causes include the absence of real-time tracking systems, lack of integrated digital platforms, and limited availability of accessible devices, creating technological barriers to resource discovery. Method-related issues stem from manual booking processes, decentralized scheduling, and redundant approval procedures that create procedural inefficiencies and bureaucratic hurdles. Man-related factors highlight human elements such as student unawareness of vacant classrooms, faculty difficulties in checking room availability, and miscommunication in borrowing requests that translate information gaps into resource underutilization. Money-related constraints involve limited funding for new facilities, budget cuts impacting resource availability, and high maintenance costs that create an environment of resource scarcity. Management-related problems include the lack of centralized allocation policies, absence of standardized prioritization procedures, and weak enforcement of borrowing rules that prevent systematic resource optimization. Measurement-related deficiencies encompass the absence of usage tracking systems, performance indicators, and booking trend monitoring that eliminate feedback mechanisms for data-driven decision making. These six categories work synergistically to create the central problem, where technological limitations prevent real-time information access, procedural inefficiencies compound booking difficulties, human factors create communication breakdowns, financial constraints intensify resource competition, management gaps prevent effective governance, and measurement deficiencies eliminate improvement opportunities, ultimately resulting in the chronic inefficient campus navigation and resource allocation experienced in CCIS.







DATA FLOW DIAGRAM
	A Data Flow Diagram (DFD) maps out how information, actors, and steps flow within a process or system. It uses symbols to show the people and processes needed to move data correctly. It is important because it helps create a visualization of how data moves through a system, spot inefficiencies, and find opportunities to improve overall functionality. This assures efficient operations, better decision-making, and enhanced communication among team members. The main actors of the system include Students and Faculty, who use the Navigation and Scheduling Modules for locating facilities and monitoring room availability, as well as the Equipment Borrowing Module for requesting to borrow items. Faculty can also update room schedules, while Administrative Staff manage requests and oversee the consistency of records through the Admin Dashboard. The system relies on three core data stores: the User Database for credentials and roles, the Facility Database for room schedules and availability, and the Equipment Database for items that can be borrowed. Data flows connect these processes and stores, and supported by a Synchronization Engine that ensures real-time updates. The structure highlights dependencies between roles and processes, ensuring accurate room monitoring, efficient navigation, and reliable equipment lending to benefit the entire institution.









USE CASE DIAGRAM
We used Use Case Modelling to aid us in determining the functional requirements of the system, helping to identify and describe the interactions between the system and its actors as well as user needs, helping clarify system functionality and flow. App Users are the primary users benefiting from the application, they can access the digital map for navigation and can monitor rooms and request equipment through the application. The Faculty’s role shares similar privileges as an app user, but their primary role is to update the status of the rooms monitored by the system, this role is benefited by fellow faculty and users, they can also request equipment for educational needs to be confirmed by the Administrative Staff, which handles the back-end operations like the lending processes of equipment requested by the users and faculty. They ensure that all records of borrowed, returned, or available items remain consistent and accurate. This role is critical for maintaining order and accountability within the equipment borrowing process. As for dependencies, Monitoring of equipment status can be done by anyone, this refers to identifying where an equipment is, who is borrowing it and what is available in the facilities, Browsing of equipment may or may not result to a borrowing request (hence the extend relationship), but once a request is submitted and approved, the equipment’s status is automatically updated to reflect its new condition. Similarly, the accuracy of room monitoring depends on timely updates from the faculty, while the success of equipment lending depends on the administrative staff. These dependencies shows each actor’s role the interconnectedness of the use cases to create a coherent and efficient workflow.
USE CASE DESCRIPTION


















CLASS DIAGRAM 
The class diagram illustrates the system’s structural framework and how its various components interact to achieve efficient management of campus resources. At its core, the abstract User class defines common attributes and methods shared across all system users, such as authentication and profile management. It is extended by three subclasses — Student, Faculty, and Admin — each representing different access levels and responsibilities within the system. This inheritance setup promotes reusability and enforces role-based functionality, ensuring that students and faculty can view available rooms, request equipment, and access navigation tools, while administrators can approve requests, update records, and manage users. Alongside user management, the diagram outlines the spatial organization of the CCIS campus through interconnected classes like Map, Building, Floor, and Room, which collectively mirror the college’s physical layout and enable accurate navigation and real-time room tracking. 
Additionally, the diagram highlights how system modules collaborate to manage scheduling, equipment, and real-time notifications. The Room, Schedule, and Reservation classes work together to prevent booking conflicts and optimize space utilization, while the Equipment, EquipmentInventory, and EquipmentRequest classes handle resource borrowing and approval workflows. Supporting service classes such as AuthService, NotificationService, and AuditLog enhance system security, transparency, and communication. Meanwhile, the inclusion of OccupancySensor allows real-time monitoring of room usage and availability, reflecting the system’s integration of smart technologies. Overall, the class diagram demonstrates a cohesive, modular, and scalable design where every class plays a specific role, mirroring the real-world interactions and operational flow of the CCIS environment. 


ACTIVITY DIAGRAM
Access Map 
The user opens the CCIS CONNECT app and logs in. If the credentials are valid, the system loads the dashboard. The user selects the map feature, prompting the system to display the digital campus map and request a room or building search. After entering a location, the system checks for a match. If found, it highlights the location, shows navigation details, and displays room information such as status, floor, and capacity. If not found, the system alerts the user and prompts them to try another search. The user then views the location and room details. 


Monitor Room Availability 
Upon getting a map overview, The actor selects a room on the map view, The system displays a screen showing room status and schedule, the system prompts a return button to return to map view.


Update Room Availability 
The actor selects the update room option from a menu list, The system prompts a camera to scan any QR plastered into the rooms, The actor scans the QR code associated to the room they are accommodating / leaving then system updates room status of the scanned room for all users to access. 


Monitor Equipment Status 
The administrative staff opens the equipment interface and selects the option to monitor equipment status. The system retrieves the full list of equipment, checks each item’s status and location, and compiles the information. The staff then views a visual list showing all equipment along with their current status. 

Browse Available Equipment
Upon clicking the browsing equipment option, the user clicks the browse option, and the system displays the list of available equipment. The user then searches for a specific equipment, and the system updates the equipment list and displays the current status. 

Request to Borrow Equipment
The user selects available equipment, prompting the system to display the equipment request form. After the user fills in the required details and submits the form, the system validates the inputs. If the information is valid, the system displays a confirmation message and completes the process. Otherwise, it returns the user to correct the details. 


Accept Equipment Request
The administrative staff initiates the process by selecting the update equipment status option, prompting the system to display the current equipment list. After choosing an item to update, the system shows its details. The staff inputs the updated status, and the system processes the changes, completing the update. 


Update Equipment Status
The administrative staff opens the equipment request menu, prompting the system to display all pending requests. After selecting a specific request, the system shows its details. The staff reviews the information and decides whether to accept the borrowing request. If approved, the system updates the equipment status. If not, the process ends. 

References:
[1] P. Adithya and M. Saravanan, "Indoor Navigation Using Augmented Reality," Int. J. Sci. Res. Sci. Technol., vol. 8, no. 4, pp. 163–169, 2021. [Online]. Available: 
[2] A. Akinwunmi et al., "Development of a Mobile Location-aware Campus Map Application," Brit. J. Math. Comput. Sci., vol. 15, no. 3, pp. 1–8, 2016. doi: 10.9734/BJMCS/2016/24640..
[3] A. A. Mohamed, M. M. Ahmed, A. A. Ali, and A. A. Afwah, "Smart Classroom Automation System," SSRG Int. J. Elect. Electron. Eng., vol. 11, no. 11, pp. 131–138, Nov. 2024, doi: 10.14445/23488379/IJEEE-V11I11P114.
[4] K. Ishaq and S. Bibi, "IoT Based Smart Attendance System Using RFID: A Systematic Literature Review," Aug. 2023. [Online]. Available:
[5] Asana, "What Is Agile Methodology? (A Beginner's Guide)," 2025. [Online]. Available:
[6] Y. D. Choudhari, A. H. Choudhari, R. P. Raut, J. C. Raut, and S. D. Ramteke, "Campus Compass Android App," Int. J. Res. Appl. Sci. Eng. Technol., vol. 12, no. 9, pp. 1274–1279, Sep. 2024, doi: 10.22214/ijraset.2024.64353.
[7]S. Matuska, J. Machaj, R. Hudec, and P. Kamencay, "An Improved IoT-Based System for Detecting the Number of People and Their Distribution in a Classroom," Sensors, vol. 22, no. 20, p. 7912, Oct. 2022, doi: 10.3390/s22207912.
[8] Kim, M. S., & Lee, J. Y. (2019). A Study on Centralized Access Control System using RFID for Smart Campus. The Journal of the Institute of Internet, Broadcasting and Communication (IIBC), 19(1), 223-228.
[9] S. N. Ler and W. M. N. W. Zainon, "Campus Mobile Navigation System Based on Shortest-Path Algorithm and Users Collaborations," in Advances in Computer Science and its Applications, H. Jeong, M. S. Obaidat, N. Yen, and J. Park, Eds. Berlin, Germany: Springer, 2014, pp. 793–798, doi: 10.1007/978-3-642-41674-3_113.
[10] M. C. Lim, J. K. T. Obispo, S. L. R. Ong, and G. S. L. Tan, "Automated borrowing system for laboratory equipment using RFID technology," B.S. thesis, De La Salle Univ., Manila, Philippines, 2010. [Online]. Available:
[11] B. Neelakantappa, S. Madhura, C. L. Meghana, & H. P. Mandara. (2025). Smart Campus Navigation System. International Journal for Multidisciplinary Research (IJFMR), 7(1), 1-7. (accessed Aug. 11, 2025).
[12] Nordin, N., Markom, M. A., Suhaimi, F. A., & Ishak, S. (2021). A Web-Based Campus Navigation System with Mobile Augmented Reality Intervention. Journal of Physics: Conference Series, 1997(1), 012038. doi:10.1088/1742-6596/1997/1/012038.
[13] Oyeman, E. C., Bantiling, J. R. A., Lerio, M. L. P., & Soberano, K. T. (2024). CAMPUS INTERACTIVE INFORMATION KIOSK WITH 3D MAPPING. International Journal of Creative Research Thoughts, 12(6). ISSN: 2320-2882.
[14] P. D. et al. (2010). Pilot Studies: The Good, The Bad, The Ugly. Journal of the American Psychiatric Nurses Association, 16(2), 119–125.
[15] P. H., & Lee, S. K. (2019). Automated Classroom Monitoring System using RFID and Sensor Technology. Journal of the Korea Institute of Information and Communication Engineering, 23(1), 69-76.
[16] S. S. and K. A., “Offline Navigation System for Campus using Voice Recognition,” International Journal of Innovative Technology and Exploring Engineering (IJITEE), vol. 9, no. 5, pp. 1845–1849, 2020.
[17] T. Smolikova and M. Kutaj, “Possibilities of using modern access control systems for the purposes of research and teaching at university,” in Proc. 4th International Scientific Conference of Computer, Electrical and Automation Engineering (ICCEAE 2020), 2020. [Online]. Available:.
[18] TagMatiks, “Use of RFID Technology in Schools and Colleges for Asset Tracking,” RFID4U, 2025. [Online]. Available:.
[19] R. Xavier et al., “Accuracy Analysis of Augmented Reality Markers for Visual Mapping and Localization,” IEEE Transactions on Visualization and Computer Graphics, vol. 25, no. 10, pp. 2781–2794, Oct. 2017. doi: 10.1109/WVC.2017.00020.
[20] C. Semeraro, “Digital Twin-Driven Innovation in Smart and Green Building,” Sustainability, vol. 17, no. 3, pp. 410–423, 2025.
[21] S. S. A. Joe et al., “IoT-Based Smart Campus Monitoring with Improved Chimp Optimization-Based DBN,” Journal of Intelligent Systems, vol. 32, no. 4, pp. 450–465, 2023.
[22] “RFID and IoT-Based Asset Tracking Projects,” IEEE Access, 2022–2025.
[23] S. Atkinson et al., “Design and Evaluation of Room Booking Mobile Applications,” Education and Information Technologies, vol. 30, pp. 1001–1018, 2018–2025.
[24] P. Neis et al., “Testing and Evaluation of Low-Cost Sensors for Smart Campus Applications,” Sensors, vol. 23, no. 9, pp. 1123–1139, 2023.
[25] “Comparative Indoor Positioning Evaluations (SLAM, BLE, Wi-Fi, Magnetic),” Journal of Location-Based Services, 2023–2025.

APPENDICES


CURRICULUM VITAE
FRANCISCO F. BASILIO
#16 Sikatuna, Vigan, Ilocos Sur
09657994759


Personal Information
Age: 20
Sex: M
Date of Birth: August 19, 2005
Place of Birth: Vigan City
Citizenship: Filipino

Education
Tertiary
Mariano Marcos State University, Batac City, Ilocos Norte
Bachelor of Science in Computer Science
2023 - Present
Secondary

Elementary


Skills
[bala na kayo]


LORAINE MAE A.  MARAMBA
#7 Caruan, Pasuquin, Ilocos Norte
09954214484


Personal Information
Age: 21
Sex: F
Date of Birth: November 9, 2004
Place of Birth: Pasuquin
Citizenship: Filipino(

Education
Tertiary
Mariano Marcos State University, Batac City, Ilocos Norte
Bachelor of Science in Computer Science
2023 - Present
Secondary

Elementary


Skills
[bala na kayo]



LIN ANTHONY M. PINEDA
[Address]
[Phone No.]
[Gmail]

Personal Information
Age: 
Sex: 
Date of Birth: 
Place of Birth: 
Citizenship: 

Education
Tertiary
Mariano Marcos State University, Batac City, Ilocos Norte
Bachelor of Science in Computer Science
2023 - Present
Secondary

Elementary


Skills
[bala na kayo]



REIGN KRIZZIA G. TAGAPUEN
#8 Catangraran, Solsona, Ilocos Norte
09350129607


Personal Information
Age: 21
Sex: F
Date of Birth: July 5, 2004
Place of Birth: Jeddah, Saudi Arabia
Citizenship: Filipino

Education
Tertiary
Mariano Marcos State University, Batac City, Ilocos Norte
Bachelor of Science in Computer Science
2023 - Present
Secondary
Solsona National High School, Solsona, Ilocos Norte
2017 - 2023
Elementary
Catangraran Elementary School, Solsona, Ilocos Norte
2016 - 2017

Skills
[bala na kayo]
