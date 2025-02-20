// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};
echo.doc = "Echoes the given arguments.";

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};
whoami.doc = "Returns the current user's name.";

export const ls = async (args: string[]): Promise<string> => {
  return `ls command is yet to be implemented...`;
};
ls.doc = "Lists information about files and directories."

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};
date.doc = "Prints the system date and time."

// Banner
export const banner = (args?: string[]): string => {
  return `
  ████████╗██╗ █████╗ ███╗   ██╗     ██╗██╗ █████╗  ██████╗     ██╗     ██╗
  ╚══██╔══╝██║██╔══██╗████╗  ██║     ██║██║██╔══██╗██╔═══██╗    ██║     ██║
     ██║   ██║███████║██╔██╗ ██║     ██║██║███████║██║   ██║    ██║     ██║
     ██║   ██║██╔══██║██║╚██╗██║██   ██║██║██╔══██║██║   ██║    ██║     ██║
     ██║   ██║██║  ██║██║ ╚████║╚█████╔╝██║██║  ██║╚██████╔╝    ███████╗██║
     ╚═╝   ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚════╝ ╚═╝╚═╝  ╚═╝ ╚═════╝     ╚══════╝╚═╝
  ╔═╗┌─┐┬─┐┌─┐┌─┐┌┐┌┌─┐┬    ╦ ╦┌─┐┌┐ ┌─┐┬┌┬┐┌─┐
  ╠═╝├┤ ├┬┘└─┐│ ││││├─┤│    ║║║├┤ ├┴┐└─┐│ │ ├┤          Powered by <span style="color:aqua; font-style:italic;"><a href="https://github.com/Cveinnt/LiveTerm" target="_blank" style="text-decoration: underline;">LiveTerm</a></span>
  ╩  └─┘┴└─└─┘└─┘┘└┘┴ ┴┴─┘  ╚╩╝└─┘└─┘└─┘┴ ┴ └─┘         
`;
};
