package com.api.hmviagens.dtos;

import javax.validation.constraints.NotBlank;

public class CompraDto {
	
	@NotBlank
	private String local_partida;
	@NotBlank
	private String destino;
	public String getLocal_partida() {
		return local_partida;
	}
	public void setLocal_partida(String local_partida) {
		this.local_partida = local_partida;
	}
	public String getDestino() {
		return destino;
	}
	public void setDestino(String destino) {
		this.destino = destino;
	}
	
	
	
}
