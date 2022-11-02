package com.api.hmviagens.models;

import java.io.Serializable;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


	@Entity
	@Table(name = "COMPRA")

	public class CompraModel implements Serializable {
		
		private static final long serialVersionUID = 1l;
		
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private UUID id;
		@Column(nullable = false, unique = true, length = 45)
		private int cliente_id;
		@Column
		private String local_partida;
		@Column
		private String destino;
		
		public UUID getId() {
			return id;
		}
		public void setId(UUID id) {
			this.id = id;
		}
		public int getCliente_id() {
			return cliente_id;
		}
		public void setCliente_id(int cliente_id) {
			this.cliente_id = cliente_id;
		}
		
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
		public static long getSerialversionuid() {
			return serialVersionUID;
		}
		
	
}
