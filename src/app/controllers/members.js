const Intl = require('intl');
const { date } = require('../../lib/utils');

module.exports = {
	index(req, res) {
		return res.render('members/index');
	},
	/* create(req, res) {
		return res.render('members/create');
	},
	post(req, res) {
		const keys = Object.keys(req.body);

		for (const key of keys) {
			if (req.body[key] == '') {
				return res.send('Falta preenchimento de algum campo.');
			}
		}
			
		const created_at = Date.now();
		birth = Date.parse(req.body.birth);//tranforma o campo de data de nascimento no mesmo formato da data de inserção
	
		let id = 1;
		const lastMember = data.members[data.members.length - 1];
	
		if (lastMember) {
			id = lastMember.id + 1;
		}
	
		data.members.push({
			id,
			...req.body,
			birth,
			created_at
		});
	
		fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err) {
			if (err) {
				return res.send('Erro ao escrever no arquivo');
			}
	
			return res.redirect('/members');//apagar o id depois que corrigir
		});
	},
	show(req, res) {
		const { id } = req.params;
		const foundMember = data.members.find(function(member){
			return member.id == id;
		});
	
		if (!foundMember) {
			return res.send('Instrutor não encontrado!')
		}
	
		const member = {
			...foundMember,
			birth: date(foundMember.birth).birthDay,
			created_at: new Intl.DateTimeFormat('pt-BR').format(foundMember.created_at),		
		}
	
		return res.render('members/show', { member: member });
	},
	edit(req, res) {
		const { id } = req.params;
		const foundMember = data.members.find(function(member){
			return member.id == id;
		});
	
		if (!foundMember) {
			return res.send('Instrutor não encontrado!')
		}
	
		const member = {
			...foundMember,
			birth: date(foundMember.birth).iso,
		}
		
		return res.render('members/edit', { member : member});
	},
	put(req, res) {
		const { id } = req.body;
		let index = 0;
		const foundMember = data.members.find(function(member, foundIndex){
			if (id == member.id) {
				index = foundIndex;
				return true;
			}
		});
	
		if (!foundMember) {
			return res.send('Instrutor não encontrado!')
		}
	
		const member = {
			...foundMember,
			...req.body,
			birth: Date.parse(req.body.birth),
			id: Number(req.body.id)
		};
	
		data.members[index] = member;
	
		fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err) {
			if (err) {
				return res.send('Erro ao escrever no arquivo');
			}
	
			return res.redirect(`/members/${id}`);
		});
	},
	delete(req, res) {
		const { id } = req.body;
		const filteredMembers = data.members.filter(function(member) {
			return member.id != id;
		});
	
		data.members = filteredMembers;
	
		fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err) {
			if (err) {
				return res.send('Erro ao escrever no arquivo');
			}
	
			return res.redirect('/members');
		});
	} */
};