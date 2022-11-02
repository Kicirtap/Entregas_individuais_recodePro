package com.api.hmviagens.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.hmviagens.models.CotacaoModel;
import com.api.hmviagens.repositories.CotacaoRepository;

@Service
public class CotacaoService {
	 
	@Autowired
	final CotacaoRepository cotacaoRepository;
	
	public CotacaoService(CotacaoRepository cotacaoRepository) {
		this.cotacaoRepository = cotacaoRepository;
	}
	
	
	@Transactional
	public Object save(CotacaoModel cotacaoModel) {
		
		return cotacaoRepository.save(cotacaoModel);
	}


	public List<CotacaoModel> findAll() {
		
		return cotacaoRepository.findAll();
	}


	public Optional<CotacaoModel> findByID(UUID id) {
		return cotacaoRepository.findById(id);
	}

    @Transactional
	public void delete(CotacaoModel cotacaoModel) {
    	cotacaoRepository.delete(cotacaoModel);
		
	}
}
