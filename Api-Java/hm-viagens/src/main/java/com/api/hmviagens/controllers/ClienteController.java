package com.api.hmviagens.controllers;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
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

import com.api.hmviagens.dtos.ClienteDto;
import com.api.hmviagens.models.ClienteModel;
import com.api.hmviagens.services.ClienteService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600 )
@RequestMapping("/clientes")
public class ClienteController {
	
	final ClienteService clienteService;

	public ClienteController(ClienteService clienteService) {
		this.clienteService = clienteService;
	}
	
	@PostMapping
	public ResponseEntity<Object> saveCliente(@RequestBody @Valid ClienteDto clienteDto) {
		var clienteModel = new ClienteModel();
		BeanUtils.copyProperties(clienteDto, clienteModel);
		clienteModel.setRegistroData(LocalDateTime.now(ZoneId.of("UTC")));
		return ResponseEntity.status(HttpStatus.CREATED).body(clienteService.save(clienteModel));
		
	}
	
	@GetMapping
	public ResponseEntity<List<ClienteModel>> getAll(){
		return ResponseEntity.status(HttpStatus.OK).body(clienteService.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Object> getOneCliente(@PathVariable("id") Integer id){
		Optional<ClienteModel> clienteModelOptional = clienteService.findByID(id);
		if (!clienteModelOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não encontrado. ");
			
		}
		return ResponseEntity.status(HttpStatus.OK).body(clienteModelOptional.get());
		
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Object> deleteCliente(@PathVariable(value ="id") Integer id){
		Optional<ClienteModel> clienteModelOptional = clienteService.findByID(id);
		if(!clienteModelOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não encontrado. ");
			
		}
		clienteService.delete(clienteModelOptional.get());
		return ResponseEntity.status(HttpStatus.OK).body(" Cliente deletado com sucesso! ");
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Object> updateCliente(@PathVariable(value = "id") Integer id,
			@RequestBody @Valid ClienteDto clienteDto){
		Optional<ClienteModel> clienteModelOptional = clienteService.findByID(id);
		if(!clienteModelOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(" Cliente não encontrado! ");
					
		}
		var clienteModel = clienteModelOptional.get();
		clienteModel.setNome(clienteDto.getNome());
		clienteModel.setTelefone(clienteDto.getTelefone());
		clienteModel.setEmail(clienteDto.getEmail());
		return ResponseEntity.status(HttpStatus.OK).body(clienteService.save(clienteModel));
	}
}


