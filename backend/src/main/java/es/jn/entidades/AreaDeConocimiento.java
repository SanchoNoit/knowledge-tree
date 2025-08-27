package es.jn.entidades;

import java.util.Collection;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Areas")
public class AreaDeConocimiento {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private Long id;
    private String nombre;
    
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "Dominio")
	private DominioDeConocimiento dominio;
    
	@OneToMany(cascade = CascadeType.ALL, targetEntity = TemaDeEstudio.class, mappedBy = "area")
    private Collection<TemaDeEstudio> subtemas;
    
    public AreaDeConocimiento() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public DominioDeConocimiento getDominio() {
		return dominio;
	}

	public void setDominio(DominioDeConocimiento dominio) {
		this.dominio = dominio;
	}

	public Collection<TemaDeEstudio> getSubtemas() {
		return subtemas;
	}

	public void setSubtemas(Collection<TemaDeEstudio> subtemas) {
		this.subtemas = subtemas;
	}
    
}
