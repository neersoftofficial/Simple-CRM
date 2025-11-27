import React, {useState} from 'react';


export default function TeamModal({team, setTeam}){
const [name, setName] = useState('');
const add = ()=>{
if (!name.trim()) return;
setTeam([...team, {id:Date.now(), name:name.trim()}]);
setName('');
}
const remove = (id)=> setTeam(team.filter(t=>t.id!==id));


return (
<div className="card">
<h3>Team members</h3>
<div className="small-muted">Add people who can be assigned leads</div>
<div style={{marginTop:12}}>
<div style={{display:'flex',gap:8}}>
<input className="input" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
<button className="button" onClick={add}>Add</button>
</div>
<div style={{marginTop:12}} className="team-list">
{team.map(t=> (
<div key={t.id} className="card" style={{padding:'6px 10px',display:'flex',alignItems:'center',gap:8}}>
<div className="small-muted">{t.name}</div>
<button onClick={()=>remove(t.id)} style={{marginLeft:8}} className="button">Remove</button>
</div>
))}
</div>
</div>
</div>
);
}
