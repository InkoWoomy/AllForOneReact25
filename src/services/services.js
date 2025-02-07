const getData = async(dataString) => {
    const response = await fetch(`https://allforone25-e6hpcea8gnfegqdn.westus-01.azurewebsites.net/api/${dataString}`);
    const data = await response.text();
    return data;
}

export {getData};