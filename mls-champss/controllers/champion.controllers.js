import { PrismaClient } from "@prisma/client"; 
const prisma = new PrismaClient();

const addOne = async (req, res) => {
    let newChampion = await prisma.champions.create({
        data: req.body
        });
    req.send("New Champ Added", newChampion);

}

const getAll = async (req, res) => {
    const allChampions = await prisma.champions.findMany();
    res.send(allChampions); 
}

const getOne = async (req, res) => {
    const foundChampion = await prisma.champions.findUnique({
        where: {
            id: Number.parseInt(req.params.id),
        },
    });
    if (!foundChampion) {
        res.status(404).send();
        return;
    }
    res.send(foundChampion);
}
const updateOne = async (req, res) => {
    await prisma.champions.update({
        where: {
            id: Number.parseInt(req.params.id),
        },
        data: req.body
    });

    res.send(champions);
    

}

const getHomePage = async(req, res) => {
    const allChampions = await prisma.champions.findMany();
    res.render('home', { allChampions });
}

const getPage1 = (req, res) => {  
    res.render('page1'); 
}

export default {
    addOne,
    getAll,
    getOne,
    updateOne,
    getHomePage,
    getPage1,
}