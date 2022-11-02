package com.api.hmviagens.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.hmviagens.models.CompraModel;
import com.api.hmviagens.repositories.CompraRepository;

@Service
public class CompraService {
 
	@Autowired
	final CompraRepository compraRepository;
	
	public CompraService(CompraRepository compraRepository) {
		this.compraRepository = compraRepository;
	}
	
	
	@Transactional
	public Object save(CompraModel compraModel) {
		
		return compraRepository.save(compraModel);
	}


	public List<CompraModel> findAll() {
		
		return compraRepository.findAll();
	}


	public Optional<CompraModel> findByID(UUID id) {
		return compraRepository.findById(id);
	}

    @Transactional
	public void delete(CompraModel compraModel) {
    	compraRepository.delete(compraModel);
		
	}
}
