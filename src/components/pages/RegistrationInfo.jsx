import React from 'react'
import '../registrationtable.css'
import Footer from '../Footer.jsx'
function RegistrationInfo() {
    return (
        <>
        <div className="table_container">
        <table className="table">
            <th>Dates</th>
            <th>Current Student</th>
            <th>Student's Sibling</th>
            <th>New Student</th>
            <th>Registration Fees</th>
            <tr>
                <td>February 25th</td>
                <td>Currently enrolled students must re-enroll through the <a href="https://eslalmadina.com/Default.asp">Family Zone Website</a></td>
                <td></td>
                <td></td>
                <td rowSpan="3">
                    <ol>
                        <li> <b>A one time 100 $CAD NON-REFUNDABLE book fees for textbooks for students in Grades 4 to 9</b></li>
                        <li><b>Annual Registration fees: 250 $CAD per child</b></li>
                    </ol>
                </td>
            </tr>
            <tr>
            <td>March 8th</td>
            <td></td>
            <td>the <b>Waitlist</b> is opened to kindergarten to <b>Grade 9</b> siblings</td>
           
         
            </tr>
            <tr>
                <td>March 19th</td>
                <td></td>
                <td></td>
                
                <td>the <b>Waitlist</b> is opened to new families from kindergarten to <b>Grade 9</b> students</td>
                
            </tr>
        </table>
        </div>
        <div className="table_container">
        <table  className="table">
            <th>Notes to be Considered</th>
            <tr><td>All current students must re-enroll every year</td></tr>
            <tr><td>If you are not planning to re-enroll your children please inform the office managers at the schools at 403-543-5070 or 403 543 5074</td></tr>
            <tr><td>All information required is available on our website Almadina Language Charter Academy serves ELL students as mandated by our <a href="http://esl-almadina.com/our-charter/" rel="_blank">Charter.</a></td></tr>
            <tr><td>All fees must be paid and up-to-date in order to re-enroll.</td></tr>
            <tr><td>Students on the waitlist must reapply every year to stay on the waitlist.</td></tr>
            <tr><td>Siblings of current students are given priority; acceptance is based on if there is space in the grade and the sibling’s position on the waitlist</td></tr>
            <tr><td>After siblings have been contacted, new families to Almadina may be contacted from the waitlist.</td></tr>
            <tr><td>Applicants may be contacted by phone to schedule a language proficiency assessment</td></tr>
            <tr><td>Each year, the number of waitlist students contacted for language proficiency assessment varies depending on classroom space and the number of siblings.</td></tr>
            <tr><td>Parents will be contacted by phone when there is SPACE available in the grade their child is applying for. ONLY if:
                <ol>
                    <li>Language Proficiency Assessment has been completed.</li>
                    <li>Recent report cards have been submitted to the system.</li>
                    <li>Additional documents (Individual Program Plans, Occupational Therapy, Speech Language Pathology and Government documents) have been submitted to the system.</li>
                    
                    </ol></td></tr>
            <tr><td>During re-enrollment and registration time, the offices at both campuses are very busy. If you have questions please read the frequently asked questions.</td></tr>
            <tr><td>Only legal parents and guardians may register their child(ren) on Family Zone.</td></tr>
            <tr><td>For ECS Sibling and ECS New Students, the child’s date of birth must be on or before December 31, 2016 (5 years old on or before December 31, 2021) to be accepted into our ECS program for the 2021-2022 school year.</td></tr>
            <tr><td>We rely on accurate information from parents/guardians. When information is incorrect, we are not able to process re-enrollment/waitlist information. Please ensure information is up-to-date and correctly entered (i.e. most recent report card, email address, phone number, birth date).</td></tr>
            <tr><td>Incomplete applications will not be considered. Please ensure you include all of the required information and documentation</td></tr>
            <tr><td></td></tr>
            <tr><td>Link to detailed list of the required information and documentation:  Waitlist Information for ALL Families.</td></tr>
        </table>
            
        </div>
        <Footer/>
        </>
    )
}

export default RegistrationInfo
