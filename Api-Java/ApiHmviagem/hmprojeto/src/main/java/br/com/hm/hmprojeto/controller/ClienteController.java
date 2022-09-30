package br.com.hm.hmprojeto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.hm.hmprojeto.model.Cliente;

@RestController
@RequestMapping(value = "/pessoa" )
@CrossOrigin("*")
public class ClienteController<PessoaService> {
	
	@Autowired
	private PessoaService service;
	
	/*FIND BY ID*/
	@GetMapping(value = "{id}")
	public ResponseEntity<Cliente> findById(@PathVariable Long id){
		Cliente cliente = service.findById(id);
		return ResponseEntity.ok().body(cliente);
	}
	
	/*FIND ALL*/
	@GetMapping
	public ResponseEntity<List<Cliente>> findAll(){
		List<Cliente> pessoas = service.findAll();
		return ResponseEntity.ok().body(cliente);
	}
	
	/*SAVE*/
	@PostMapping
	public ResponseEntity<Cliente> save(@RequestBody Cliente pessoa){
		Cliente objeto = service.save(pessoa);
		return ResponseEntity.ok().body(objeto);
	}
	
	/*UPDATE*/
	@PutMapping
	public ResponseEntity<Cliente> update(@RequestBody Cliente pessoa){
		Cliente objeto = service.update(pessoa);
		return ResponseEntity.ok().body(objeto);
	}
	
	/*DELETE*/
	@DeleteMapping(value = "/(id)")
	public ResponseEntity<Void> delete(@PathVariable Long id){
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
}