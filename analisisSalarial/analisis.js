

// Personal analysis for juanita

function findPerson(person){

    return salarios.find(personObj => personObj.name == person);
}

function medianForPerson(namePerson){
    const jobs = findPerson(namePerson).trabajos;
    
    const salaryJobs = jobs.map(job => job.salario);

    const medianSalaries = StatisticsForms.calculateMedian(salaryJobs);
    
    return medianSalaries;
}    