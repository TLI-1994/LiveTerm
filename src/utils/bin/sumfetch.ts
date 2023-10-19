import config from '../../../config.json';
import { concatenateHorizontally } from '../concatenateHorizontally';

const sumfetch = (args?: string[]): string => {
  let info = `
 sumfetch
-----------

 ABOUT
 ${config.name}
 <u><a href="${config.resume_url}" target="_blank">resume</a></u>
爵 <u><a href="${config.repo}" target="_blank">GitHub repo</a></u>
-----------

 CONTACT 
 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
 <u><a href="https://github.com/${config.social.github}" target="_blank">GitHub</a></u>
 <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">LinkedIn</a></u>
 <u><a href="https://scholar.google.com/${config.social.googleScholar}" target="_blank">Google Scholar</a></u>
`;
  if (config.ascii === 'cveinnt') {
  } else if (config.ascii === 'liveterm') {
    let asciiArt = `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄ 
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄ 
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄ 
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓ 
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓
▐▓                                 ▐▓
▐▓        > L I V E T E R M        ▐▓
▐▓                                 ▐▓
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓ 
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀ 
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀ 
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀ 

`;
    return concatenateHorizontally(asciiArt, info, 50, 25) + `\n`;
  } else {
    let asciiArt = `
             ███████████         
         ▓██████████▒   ███▓     
      ▒▒█▒   ███████▒      ▒█▒▒  
      █▓  ▒▓█▓▓▓▓▓▓▓██▒▒     ▓█  
    ▒▓██▒▓█▓▒       ▒▒██▒▒▒▒▒▓█▓▒
    ███████▒          ▓██▓▒▒▒▓███
    ██▒▒███▒          ▓█▒▒    ▒██
    ██  ▒▓█▓▓       ▒▓██       ██
    ██   ▒███▓▓▓▓▓▓▓████▓▓   ▒▓██
    ██ ▒█████████████████████████
      █████▓▒▒▒██▒▒▒██▒▒▒▓█████  
       ▒█▓▒▒▒▒▒██▒▒▒██▒▒▒▒▒▓█▒   
        ▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▒   
         ▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒     
`;
    return concatenateHorizontally(asciiArt, info, 50, 100) + `\n`;
  }
};

export default sumfetch;
