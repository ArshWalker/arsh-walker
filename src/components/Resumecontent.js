import React from 'react';

function ResumeContent({ title, date, content }) {
  return (
    <div className="resume-item">
      <h5 className={title ? 'resume-title' : 'resume-no-title'}>{title}</h5>
      <p>
        <em>{date}</em>
      </p>
      <ul>
        {content.map((value, index) => (
          <li key={index}> ‣ {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResumeContent;
