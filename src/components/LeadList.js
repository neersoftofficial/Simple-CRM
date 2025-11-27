import React from 'react';


const colorForStage = (s)=>{
if (!s) return 'grey';
if (s.includes('Won')) return 'green';
if (s.includes('Lost')) return 'red';
if (s.toLowerCase().includes('not')) return 'grey';
if (s.toLowerCase().includes('meeting')) return 'orange';
return 'grey';
}


export default function LeadList({leads, onEdit, onDelete}){
return (
<div className="card">
<h3>Leads</h3>
<div className="list">
{leads.length===0 && <div className="small-muted" style={{padding:12}}>No leads yet</div>}
{leads.map(l=> (
<div key={l.id} className="lead-row">
<div>
<div style={{fontWeight:700}}>{l.name || '—'}</div>
<div className="small-muted">{l.email || l.phone || ''}</div>
<div style={{marginTop:6}}>
{l.tags && l.tags.map((t,i)=> <span key={i} className="tag">{t}</span>)}
</div>
</div>


<div style={{textAlign:'right'}}>
<div style={{marginBottom:8}}>
<span className={`badge ${colorForStage(l.stage)}`}>{l.stage}</span>
</div>
<div className="small-muted">{l.responsible}</div>
<div style={{marginTop:8,display:'flex',gap:8,justifyContent:'flex-end'}}>
<button className="button" onClick={()=>onEdit(l)} style={{background:'#6b7280'}}>Edit</button>
<button className="button" onClick={()=>onDelete(l.id)} style={{background:'#ef4444'}}>Delete</button>
</div>
</div>
</div>
))}
</div>
</div>
);
}
