package br.com.hm.hmprojeto.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataNotFoundException;
import org.springframework.stereotype.Service;

import br.com.hm.hmprojeto.model.Cliente;
import br.com.hm.hmprojeto.repositories.ClienteRepository;

/*FAZ A REQUISIÇÃO DO CRUD*/

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository pessoaRepo;
	
	/* FIND BY ID - encontrar a pessoa pelo id*/
	public Cliente findById(Long id) {
		Optional<Cliente> pessoa = pessoaRepo.findById(id);
		return pessoa.orElseThrow(() -> new ConfigDataNotFoundException("Objeto com id: " 
		+ id + " não foi encontrado. Tipo" + Cliente.class.getName()));
	}
	
	/*FIND ALL*/
	public List<Cliente> findAll(){
		return pessoaRepo.findAll();
	}
	
	/*SAVE*/
	public Cliente save(Cliente cliente) {
		return pessoaRepo.save(cliente);
	}
	
	/*UPDATE*/
	public Cliente update(Cliente cliente) {
		findById(Cliente.getId());
		return pessoaRepo.save(cliente);
	}
	
	/*DELETE*/
	public void deletePessoa(Long id) {
		pessoaRepo.deleteById(id);
	}
	
}
