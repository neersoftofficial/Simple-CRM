import React, {useEffect, useState} from 'react';
return (
<div className="card">
<h3>{editingLead ? 'Edit Lead' : 'New Lead'}</h3>
<div className="form-row">
<label className="small-muted">Name</label>
<input className="input" value={data.name} onChange={e=>setData({...data,name:e.target.value})} />
</div>
<div className="form-row">
<label className="small-muted">Email</label>
<input className="input" value={data.email} onChange={e=>setData({...data,email:e.target.value})} />
</div>
<div className="form-row">
<label className="small-muted">Phone</label>
<input className="input" value={data.phone} onChange={e=>setData({...data,phone:e.target.value})} />
</div>
<div className="form-row">
<label className="small-muted">Service</label>
<input className="input" value={data.service} onChange={e=>setData({...data,service:e.target.value})} />
</div>


<div className="form-row">
<label className="small-muted">Lead Stage</label>
<select className="input" value={data.stage} onChange={e=>setData({...data,stage:e.target.value})}>
{STAGES.map(s=> <option key={s} value={s}>{s}</option>)}
</select>
</div>


<div className="form-row">
<label className="small-muted">Responsible (assign team member)</label>
<select className="input" value={data.responsible} onChange={e=>setData({...data,responsible:e.target.value})}>
<option value="">-- none --</option>
{team.map(t=> <option key={t.id} value={t.name}>{t.name}</option>)}
</select>
</div>


<div className="form-row">
<label className="small-muted">Tags (comma separated)</label>
<input className="input" value={data.tags} onChange={e=>setData({...data,tags:e.target.value})} />
</div>


<div className="form-row">
<label className="small-muted">Notes</label>
<textarea className="input" rows={4} value={data.notes} onChange={e=>setData({...data,notes:e.target.value})}></textarea>
</div>


<div style={{display:'flex',gap:8}}>
<button className="button" onClick={save}>{editingLead ? 'Save changes' : 'Add lead'}</button>
{editingLead && <button className="button" onClick={onCancel} style={{background:'#6b7280'}}>Cancel</button>}
</div>
</div>
);
}
