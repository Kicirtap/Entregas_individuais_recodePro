package com.api.hmviagens.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.hmviagens.models.ClienteModel;
import com.api.hmviagens.repositories.ClienteRepository;

@Service
public class ClienteService {
	
	@Autowired
	final ClienteRepository clienteRepository;
	
	public ClienteService(ClienteRepository clienteRepository) {
		this.clienteRepository = clienteRepository;
	}
	
	
	@Transactional
	public Object save(ClienteModel clienteModel) {
		
		return clienteRepository.save(clienteModel);
	}


	public List<ClienteModel> findAll() {
		
		return clienteRepository.findAll();
	}


	/*public Optional<ClienteModel> findByID(UUID id) {
		return clienteRepository.findById(id);
	}*/

    @Transactional
	public void delete(ClienteModel clienteModel) {
		clienteRepository.delete(clienteModel);
		
	}


	public Optional<ClienteModel> findByID(Integer id) {
		return clienteRepository.findById(id);
	}
}
