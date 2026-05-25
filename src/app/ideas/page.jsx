import React from 'react';
import IdeaCard from '../components/IdeaCard';

const IdeasPage = async () => {


const res = await  fetch("http://localhost:8000/idea")
const ideas = await res.json()
console.log(ideas);
    return (
        <div>
            <h1>All Ideas</h1>
            <div>
                {
                    ideas.map(idea => <IdeaCard key={idea._id} idea={idea} />)
                }
            </div>
        </div>
    );
};

export default IdeasPage;