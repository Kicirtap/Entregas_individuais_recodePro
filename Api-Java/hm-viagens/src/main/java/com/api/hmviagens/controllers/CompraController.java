package com.api.hmviagens.controllers;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

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

import com.api.hmviagens.dtos.CompraDto;
import com.api.hmviagens.models.CompraModel;
import com.api.hmviagens.services.CompraService;


@RestController
@CrossOrigin(origins = "*", maxAge = 3600 )
@RequestMapping("/compra")
public class CompraController {

	final CompraService compraService;

	public CompraController(CompraService compraService) {
		this.compraService = compraService;
	}
	
	@PostMapping
	public ResponseEntity<Object> saveCotacao(@RequestBody @Valid CompraDto compraDto) {
		var cotacaoModel = new CompraModel();
		BeanUtils.copyProperties(compraDto, cotacaoModel);
		return ResponseEntity.status(HttpStatus.CREATED).body(compraService.save(cotacaoModel));
		
	}
	
	@GetMapping
	public ResponseEntity<List<CompraModel>> getAll(){
		return ResponseEntity.status(HttpStatus.OK).body(compraService.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Object> getOneCotacao(@PathVariable(value = "id") UUID id){
		Optional<CompraModel> cotacaoModelOptional = compraService.findByID(id);
		if (!cotacaoModelOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cotação não encontrada. ");
			
		}
		return ResponseEntity.status(HttpStatus.OK).body(cotacaoModelOptional.get());
		
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Object> deleteCotacao(@PathVariable(value ="id") UUID id){
		Optional<CompraModel> cotacaoModelOptional = compraService.findByID(id);
		if(!cotacaoModelOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cotação não encontrada. ");
			
		}
		compraService.delete(cotacaoModelOptional.get());
		return ResponseEntity.status(HttpStatus.OK).body(" Cotação deletada com sucesso! ");
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Object> updateCotacao(@PathVariable(value = "id") UUID id,
			@RequestBody @Valid CompraDto compraDto){
		Optional<CompraModel> cotacaoModelOptional = compraService.findByID(id);
		if(!cotacaoModelOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(" Cotação não encontrada! ");
					
		}
		var cotacaoModel = cotacaoModelOptional.get();
		cotacaoModel.setLocal_partida(compraDto.getLocal_partida());
		cotacaoModel.setDestino(compraDto.getDestino());
		return ResponseEntity.status(HttpStatus.OK).body(compraService.save(cotacaoModel));
	}
}
