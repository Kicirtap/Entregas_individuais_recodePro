package com.api.hmviagens.dtos;

import javax.validation.constraints.NotBlank;

public class ClienteDto {
  
	@NotBlank
	private String nome;
	@NotBlank
	private String telefone;
	@NotBlank
	private String email;
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
}
