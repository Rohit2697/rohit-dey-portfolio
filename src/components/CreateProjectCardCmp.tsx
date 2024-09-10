import React from 'react';
interface CreateProjectCardCmpProps {
  [key: string]: string[];
}

const CreateProjectCardCmp: React.FC<{
  techSTacks: CreateProjectCardCmpProps;
}> = ({ techSTacks }) => {
  return (
    <div>
      {Object.keys(techSTacks).map((techStack) => {
        return (
          <>
            <span>
              <span className="text-sm font-semibold">{techStack.toUpperCase()}</span> :{' '}
              <span>
                {techSTacks[techStack].join(', ').toLocaleLowerCase()}
              </span>
            </span>
            <br />
          </>
        );
      })}
      {/* {<span className="text-sm  font-bold">Frontend</span>
      <span className="text-xs">HTML5, CSS, JavaScript</span>} Backend: Node.js,
      Express server, REST APIs Deployment: Git and Heroku Link:
      https://rohit-dey-weather-application.herokuapp.com/ */}
    </div>
  );
};
export default CreateProjectCardCmp;
