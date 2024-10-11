export default async function login(email:string, password:string){
    try{
        const response = await fetch('/api/login', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                "email":email, 
                "password":password 
            }),
        });
        const result = await response.json();
        return result;
    }catch(err){
        console.log(err.stack)
    }
}
  