import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const getUser = async(req: Request, res: Response) => { 
    const username = req.headers['username'] as string; 
    const password = req.headers['password'] as string; 

    try{ 
        const user = await prisma.users.findMany({ 
            where: { 
                username: username,
                password: password
            }
        });

        if(user.length === 0){ 
            return res.status(401).json({message : 'Error: Wrong Username or password'})
        }

        res.status(200).json(user);



    } catch(error){ 
        console.error(error);
        return res.status(500).send(`Internal Server Error ` + error )

    } 

}


const postUser = async(req: Request, res: Response) => { 
    const {username, password, role, bio, email, phone, full_name} = req.body;
    try{ 
        const user = await prisma.users.create({ 
            data:{ 
                username: username,
                password: password,
                role: role,
                bio: bio, 
                email: email,
                phone: phone,
                full_name: full_name

            }
        })

        return res.status(200).json({message:"Succesfully added user"})

    }catch(error){ 
        return res.status(500).send("Internal Server Error: " + error)
        
    }
}

    





const defaultExport = { 
    getUser,
    postUser
}
export default defaultExport;