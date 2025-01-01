import {
  livingIn,
  workingWith,
  haveALook,
  skills,
  excited,
  pcmc,
} from "../utils/constants";

const About = () => {
  return (
    <div>
      <p>
        {livingIn}
        <a
          className="text-[#0000EE]"
          href="https://goo.gl/maps/eVxnda7CMtBV6yfX7"
        >
          {pcmc}
        </a>
        <p className="mb-0"></p>
        {workingWith}
        <a className="text-[#0000EE]" href="https://www.ncs.co/en-sg/">
          NCS.CO
        </a>
        . &#x1F607;
      </p>
      <p className="mb-0">
        {haveALook}
        <a className="text-[#0000EE]" href="https://github.com/2sagarraut2">
          Github
        </a>
        {skills}
        <a
          className="text-[#0000EE]"
          href="https://www.linkedin.com/in/sagar-raut-624344189"
        >
          LinkedIn
        </a>
        <p className="mb-0"></p>
        {excited}
      </p>
    </div>
  );
};

export default About;
