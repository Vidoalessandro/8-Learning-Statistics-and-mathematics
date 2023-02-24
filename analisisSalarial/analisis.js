console.group('Country analysis');

// Country analysis

console.log(salarios);

console.groupEnd('Country analysis');

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

console.group('Business analysis');

// Business analysis

const companies = {};

for(person of salarios){
    for(job of person.trabajos){
        if(!companies[job.empresa]){
            companies[job.empresa] = {};
        }

        if(!companies[job.empresa][job.year]){
            companies[job.empresa][job.year] = [];
        }

        companies[job.empresa][job.year].push(job.salario);
    }
}

console.log(companies);

console.groupEnd('Business analisys')

// Returns the median salary of that person 

function medianCompanyYear(name, year){
    if(!companies[name]){
        console.warn('This company does\'t exist');
    }
    else if(!companies[name][year]){
        console.warn('This company did not give salaries that year');
    } else {
        return StatisticsForms.calculateMedian(companies[name][year]);
    }
}

// Returns the projection of the company for the following year

function projectionForCompany(name){

    if(!companies[name]){
        console.warn('This company does\'t exist');

    } else {    
        const nameCompany = companies[name];
        const yearsCompaniesSalaries = [];
        const yearsCompaniesSalariesTotal = [];

        for(year in nameCompany){
            yearsCompaniesSalaries.push(nameCompany[year]);
        }

        for(year of yearsCompaniesSalaries){
            yearsCompaniesSalariesTotal.push(StatisticsForms.calculateMedian(year));
        }

        let salaryGrowth = [];

        for(let i = 1 ; i < yearsCompaniesSalariesTotal.length; i++){
            const salary1 = yearsCompaniesSalariesTotal[i - 1];
            const salary2 = yearsCompaniesSalariesTotal[i];
    
            const increase = salary2 - salary1;
            const growthRate = increase / salary1;
            salaryGrowth.push(growthRate);
        }

        const medianGrowthRate = StatisticsForms.calculateMedian(salaryGrowth);
        const lastSalary = yearsCompaniesSalariesTotal[yearsCompaniesSalariesTotal.length - 1];
        const projectionSalary = (medianGrowthRate * lastSalary) + lastSalary;
    
        return projectionSalary;
    }
}

// General analysis

function generalMedian(country){
    const salaries = [];

    for(person of country){
        salaries.push(medianForPerson(person.name));
    }

    const personMedian = StatisticsForms.calculateMedian(salaries);

    return personMedian;
}

// Returns the median of Top 10%

function medianTop10(country){
    const salaries = [];

    for(person of country){
        salaries.push(medianForPerson(person.name));
    }

    const orderSalaries = StatisticsForms.orderArray(salaries);
    const tenTop = (orderSalaries.length * 10) / 100;
    
    // .slice and .splice methods

    /*const tenTop = (orderSalaries.length * 10) / 100;
    const limit = orderSalaries.length - tenTop;
    const salariesTopTen = orderSalaries.slice(limit, orderSalaries.length);
    const salariesTopTen = orderSalaries.splice(limit, orderSalaries.length);*/

    // My solution using For
    
    const salariesTopTen = [];

    for(let i = orderSalaries.length - tenTop; i < orderSalaries.length; i++){
        salariesTopTen.push(orderSalaries[i]);
    }

    const salariesTopTenMedian = StatisticsForms.calculateMedian(salariesTopTen);
    return salariesTopTenMedian;
}