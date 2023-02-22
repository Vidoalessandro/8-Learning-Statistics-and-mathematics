// Personal analysis

// Find a person listed in .salarios

function findPerson(person){

    return salarios.find(personObj => personObj.name == person);
}

// Returns the median salary of that person

function medianForPerson(namePerson){
    const jobs = findPerson(namePerson).trabajos;
    
    const salaryJobs = jobs.map(job => job.salario);

    const medianSalaries = StatisticsForms.calculateMedian(salaryJobs);
    
    return medianSalaries;
}

// Returns the projection of that person's salary for the following year

 function projectionForPerson(person){
    const jobs = findPerson(person).trabajos;

    let salaryGrowth = [];

    for(let i = 1 ; i < jobs.length; i++){
        const salary1 = jobs[i - 1].salario;
        const salary2 = jobs[i].salario;

        const increase = salary2 - salary1;
        const growthRate = increase / salary1;
        salaryGrowth.push(growthRate);
    }

    const medianGrowthRate = StatisticsForms.calculateMedian(salaryGrowth);
    const lastSalary = jobs[jobs.length - 1].salario
    const projectionSalary = (medianGrowthRate * lastSalary) + lastSalary;

    return projectionSalary;
 }