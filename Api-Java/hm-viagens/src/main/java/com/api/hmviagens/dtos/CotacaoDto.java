package com.api.hmviagens.dtos;

import javax.validation.constraints.NotBlank;

public class CotacaoDto {


	@NotBlank
	private String destino_cotacao;

	public String getDestino_cotacao() {
		return destino_cotacao;
	}

	public void setDestino_cotacao(String destino_cotacao) {
		this.destino_cotacao = destino_cotacao;
	}
	
	
}
