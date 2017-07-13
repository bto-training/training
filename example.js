let activeGitTrainig = true;

const improveGitSkills = () => {
  return "practice practice practice";
}

while(activeGitTrainig) {
  const msg = improveGitSkills();
  console.log(msg);
  if (Math.random() > .8) {
    activeGitTrainig = false;
  }
}