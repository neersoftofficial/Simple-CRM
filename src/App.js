import React, {useEffect, useState} from 'react';
import LeadList from './components/LeadList';
import LeadForm from './components/LeadForm';
import TeamModal from './components/TeamModal';
import {load, save} from './utils/storage';


export default function App(){
const [leads, setLeads] = useState(()=> load('leads', []));
const [team, setTeam] = useState(()=> load('team', []));
const [editing, setEditing] = useState(null);


useEffect(()=> save('leads', leads), [leads]);
useEffect(()=> save('team', team), [team]);


const addOrUpdate = (lead)=>{
if (lead.id){
setLeads(leads.map(l=> l.id===lead.id ? lead : l));
setEditing(null);
} else {
lead.id = Date.now();
setLeads([lead, ...leads]);
}
}


const remove = (id)=> setLeads(leads.filter(l=> l.id!==id));
const edit = (l)=> setEditing(l);


return (
<div className="container">
<div className="header">
<div>
<h1 style={{margin:0}}>Simple CRM</h1>
<div className="small-muted">Leads, team, tags & stages — browser-only demo</div>
</div>
<div className="small-muted">Tip: data stored in your browser (localStorage)</div>
</div>


<div className="grid">
<div>
<div style={{marginBottom:12}} className="card">
<LeadForm onSave={addOrUpdate} team={team} editingLead={editing} onCancel={()=>setEditing(null)} />
</div>


<LeadList leads={leads} onEdit={edit} onDelete={remove} />
</div>


<div style={{display:'flex',flexDirection:'column',gap:12}}>
<TeamModal team={team} setTeam={setTeam} />


<div className="card">
<h3>Quick filters</h3>
<div className="small-muted">Filter buttons could be added here later</div>
<div style={{marginTop:8}}>
<div className="small-muted">Total leads: {leads.length}</div>
</div>
</div>


<div className="card">
<h3>Legend</h3>
<div style={{display:'flex',flexDirection:'column',gap:8}}>
<div><span className="badge green">Closed - Won</span></div>
<div><span className="badge red">Closed - Lost</span></div>
<div><span className="badge grey">Not Interested</span></div>
<div><span className="badge orange">Meeting Booked</span></div>
</div>
</div>
</div>
</div>


</div>
);
}
