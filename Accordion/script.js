const Data = [
  {
    id: 1,
    question: "What are the key skills required for a software developer?",
    answer:
      "Key skills include proficiency in programming languages, problem-solving, teamwork, understanding of algorithms, and knowledge of software development tools.",
  },
  {
    id: 2,
    question: "How do you prepare for a technical interview?",
    answer:
      "Preparation involves practicing coding problems, studying data structures and algorithms, reviewing system design concepts, and brushing up on language-specific questions.",
  },
  {
    id: 3,
    question: "What is the importance of a portfolio in job applications?",
    answer:
      "A portfolio showcases your projects, skills, and experience, helping employers evaluate your capabilities and suitability for the role.",
  },
  {
    id: 4,
    question: "What are some tips for writing an effective resume?",
    answer:
      "Keep it concise, highlight relevant skills and experiences, use action-oriented language, and tailor it to the specific job description.",
  },
];

const accordianWrapper = document.querySelector(".accordian");


function createAccordianData(){
  accordianWrapper.innerHTML = Data.map((dataItem)=>`
   <div class = "accordian_item">
    <div class = "accordian_title">
     <h3>${dataItem.question}</h3>
     <i class = "fa-solid fa-arrow-down"></i>
    </div>
    <div class ="accordian_content">
     <p>${dataItem.answer}</p>
    </div>
   </div>
  `).join("")
}

createAccordianData()

const getAccordianTitles = document.querySelectorAll('.accordian_title')

getAccordianTitles.forEach(currentItem=>{
  currentItem.addEventListener('click',(e)=>{
    if(currentItem.classList.contains('active')){
      currentItem.classList.remove('active')
    }
    else{
      let getAlreadyAddedActiveClasses = document.querySelectorAll('.active')
      getAlreadyAddedActiveClasses.forEach(currentActiveItem=>{
        currentActiveItem.classList.remove('active')
      })
    }
    currentItem.classList.add('active')
  })
})